export interface Entity {
  name: string;
  type: string;
  contexts?: string[];
}

export interface GroundTruth {
  entities: Entity[];
}

export interface ScoringResult {
  precision: number;
  recall: number;
  f1: number;
  truePositives: number;
  falsePositives: number;
  falseNegatives: number;
  entityDetails: EntityMatchResult[];
}

export interface EntityMatchResult {
  entity: Entity;
  matched: boolean;
  matchedWith?: Entity;
  matchType: "exact" | "partial" | "missing" | "extra";
}

// Normalize string for comparison
function normalize(str: string): string {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
}

// Calculate similarity between two strings (simple Jaccard similarity on words)
function stringSimilarity(a: string, b: string): number {
  const wordsA = new Set(normalize(a).split(" "));
  const wordsB = new Set(normalize(b).split(" "));

  const intersection = new Set([...wordsA].filter((x) => wordsB.has(x)));
  const union = new Set([...wordsA, ...wordsB]);

  return intersection.size / union.size;
}

// Check if two entities match
function entitiesMatch(
  predicted: Entity,
  groundTruth: Entity,
  threshold = 0.8
): { matches: boolean; isExact: boolean } {
  const nameSimilarity = stringSimilarity(predicted.name, groundTruth.name);
  const typeMatches =
    normalize(predicted.type) === normalize(groundTruth.type);

  if (nameSimilarity === 1 && typeMatches) {
    return { matches: true, isExact: true };
  }

  if (nameSimilarity >= threshold && typeMatches) {
    return { matches: true, isExact: false };
  }

  return { matches: false, isExact: false };
}

export function scoreEntities(
  predicted: Entity[],
  groundTruth: Entity[]
): ScoringResult {
  const entityDetails: EntityMatchResult[] = [];
  const matchedGroundTruth = new Set<number>();
  const matchedPredicted = new Set<number>();

  // Find matches for each predicted entity
  for (let i = 0; i < predicted.length; i++) {
    const pred = predicted[i]!;
    let bestMatch: { index: number; isExact: boolean } | null = null;

    for (let j = 0; j < groundTruth.length; j++) {
      if (matchedGroundTruth.has(j)) continue;

      const gt = groundTruth[j]!;
      const { matches, isExact } = entitiesMatch(pred, gt);

      if (matches) {
        if (!bestMatch || (isExact && !bestMatch.isExact)) {
          bestMatch = { index: j, isExact };
        }
      }
    }

    if (bestMatch) {
      matchedGroundTruth.add(bestMatch.index);
      matchedPredicted.add(i);
      entityDetails.push({
        entity: pred,
        matched: true,
        matchedWith: groundTruth[bestMatch.index],
        matchType: bestMatch.isExact ? "exact" : "partial",
      });
    } else {
      entityDetails.push({
        entity: pred,
        matched: false,
        matchType: "extra",
      });
    }
  }

  // Add missing ground truth entities
  for (let j = 0; j < groundTruth.length; j++) {
    if (!matchedGroundTruth.has(j)) {
      entityDetails.push({
        entity: groundTruth[j]!,
        matched: false,
        matchType: "missing",
      });
    }
  }

  const truePositives = matchedPredicted.size;
  const falsePositives = predicted.length - truePositives;
  const falseNegatives = groundTruth.length - truePositives;

  const precision =
    predicted.length > 0 ? truePositives / predicted.length : 0;
  const recall =
    groundTruth.length > 0 ? truePositives / groundTruth.length : 0;
  const f1 =
    precision + recall > 0
      ? (2 * precision * recall) / (precision + recall)
      : 0;

  return {
    precision,
    recall,
    f1,
    truePositives,
    falsePositives,
    falseNegatives,
    entityDetails,
  };
}

export function aggregateScores(scores: ScoringResult[]): {
  avgPrecision: number;
  avgRecall: number;
  avgF1: number;
  totalTruePositives: number;
  totalFalsePositives: number;
  totalFalseNegatives: number;
  microPrecision: number;
  microRecall: number;
  microF1: number;
} {
  if (scores.length === 0) {
    return {
      avgPrecision: 0,
      avgRecall: 0,
      avgF1: 0,
      totalTruePositives: 0,
      totalFalsePositives: 0,
      totalFalseNegatives: 0,
      microPrecision: 0,
      microRecall: 0,
      microF1: 0,
    };
  }

  const totalTruePositives = scores.reduce((sum, s) => sum + s.truePositives, 0);
  const totalFalsePositives = scores.reduce(
    (sum, s) => sum + s.falsePositives,
    0
  );
  const totalFalseNegatives = scores.reduce(
    (sum, s) => sum + s.falseNegatives,
    0
  );

  const avgPrecision =
    scores.reduce((sum, s) => sum + s.precision, 0) / scores.length;
  const avgRecall =
    scores.reduce((sum, s) => sum + s.recall, 0) / scores.length;
  const avgF1 = scores.reduce((sum, s) => sum + s.f1, 0) / scores.length;

  const microPrecision =
    totalTruePositives + totalFalsePositives > 0
      ? totalTruePositives / (totalTruePositives + totalFalsePositives)
      : 0;
  const microRecall =
    totalTruePositives + totalFalseNegatives > 0
      ? totalTruePositives / (totalTruePositives + totalFalseNegatives)
      : 0;
  const microF1 =
    microPrecision + microRecall > 0
      ? (2 * microPrecision * microRecall) / (microPrecision + microRecall)
      : 0;

  return {
    avgPrecision,
    avgRecall,
    avgF1,
    totalTruePositives,
    totalFalsePositives,
    totalFalseNegatives,
    microPrecision,
    microRecall,
    microF1,
  };
}

// Parse LLM output to extract entities
export function parseEntityOutput(output: string): Entity[] {
  try {
    // Try to parse as JSON
    const parsed = JSON.parse(output) as { entities?: Entity[] } | Entity[];

    if (Array.isArray(parsed)) {
      return parsed;
    }

    if (parsed && typeof parsed === "object" && "entities" in parsed) {
      return parsed.entities ?? [];
    }

    return [];
  } catch {
    // Try to extract JSON from markdown code blocks
    const jsonMatch = /```(?:json)?\s*([\s\S]*?)```/.exec(output);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]!) as
          | { entities?: Entity[] }
          | Entity[];
        if (Array.isArray(parsed)) {
          return parsed;
        }
        if (parsed && typeof parsed === "object" && "entities" in parsed) {
          return parsed.entities ?? [];
        }
      } catch {
        // Fall through
      }
    }

    return [];
  }
}

