import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "@/env";

export type LLMProvider = "openai" | "anthropic" | "google";

export interface LLMRequest {
  provider: LLMProvider;
  modelId: string;
  systemPrompt: string;
  userPrompt: string;
  maxTokens?: number;
  temperature?: number;
}

export interface LLMResponse {
  content: string;
  latencyMs: number;
  tokenUsage: {
    input: number;
    output: number;
  };
}

let openaiClient: OpenAI | null = null;
let anthropicClient: Anthropic | null = null;
let googleClient: GoogleGenerativeAI | null = null;

function getOpenAIClient(): OpenAI {
  openaiClient ??= new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });
  return openaiClient;
}

function getAnthropicClient(): Anthropic {
  anthropicClient ??= new Anthropic({
    apiKey: env.ANTHROPIC_API_KEY,
  });
  return anthropicClient;
}

function getGoogleClient(): GoogleGenerativeAI {
  googleClient ??= new GoogleGenerativeAI(env.GOOGLE_API_KEY ?? "");
  return googleClient;
}

async function callOpenAI(request: LLMRequest): Promise<LLMResponse> {
  const client = getOpenAIClient();
  const startTime = Date.now();

  const response = await client.chat.completions.create({
    model: request.modelId,
    messages: [
      { role: "system", content: request.systemPrompt },
      { role: "user", content: request.userPrompt },
    ],
    max_tokens: request.maxTokens ?? 4096,
    temperature: request.temperature ?? 0,
  });

  const latencyMs = Date.now() - startTime;

  return {
    content: response.choices[0]?.message?.content ?? "",
    latencyMs,
    tokenUsage: {
      input: response.usage?.prompt_tokens ?? 0,
      output: response.usage?.completion_tokens ?? 0,
    },
  };
}

async function callAnthropic(request: LLMRequest): Promise<LLMResponse> {
  const client = getAnthropicClient();
  const startTime = Date.now();

  const response = await client.messages.create({
    model: request.modelId,
    max_tokens: request.maxTokens ?? 4096,
    system: request.systemPrompt,
    messages: [{ role: "user", content: request.userPrompt }],
  });

  const latencyMs = Date.now() - startTime;

  const textContent = response.content.find((block) => block.type === "text");
  const content = textContent?.type === "text" ? textContent.text : "";

  return {
    content,
    latencyMs,
    tokenUsage: {
      input: response.usage.input_tokens,
      output: response.usage.output_tokens,
    },
  };
}

async function callGoogle(request: LLMRequest): Promise<LLMResponse> {
  const client = getGoogleClient();
  const startTime = Date.now();

  const model = client.getGenerativeModel({
    model: request.modelId,
    systemInstruction: request.systemPrompt,
    generationConfig: {
      maxOutputTokens: request.maxTokens ?? 4096,
      temperature: request.temperature ?? 0,
    },
  });

  const result = await model.generateContent(request.userPrompt);
  const response = result.response;

  const latencyMs = Date.now() - startTime;

  const content = response.text();
  const usageMetadata = response.usageMetadata;

  return {
    content,
    latencyMs,
    tokenUsage: {
      input: usageMetadata?.promptTokenCount ?? 0,
      output: usageMetadata?.candidatesTokenCount ?? 0,
    },
  };
}

export async function callLLM(request: LLMRequest): Promise<LLMResponse> {
  switch (request.provider) {
    case "openai":
      return callOpenAI(request);
    case "anthropic":
      return callAnthropic(request);
    case "google":
      return callGoogle(request);
    default: {
      const exhaustiveCheck: never = request.provider;
      throw new Error(`Unsupported provider: ${String(exhaustiveCheck)}`);
    }
  }
}

export function interpolatePrompt(
  template: string,
  variables: Record<string, string>
): string {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    // Escape special regex characters in key
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp(`{{${escapedKey}}}`, "g"), value);
  }
  return result;
}

// List of commonly used models for quick reference
export const AVAILABLE_MODELS = {
  openai: [
    { id: "gpt-4o", name: "GPT-4o" },
    { id: "gpt-4o-mini", name: "GPT-4o Mini" },
    { id: "gpt-4-turbo", name: "GPT-4 Turbo" },
    { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  ],
  anthropic: [
    { id: "claude-sonnet-4-20250514", name: "Claude Sonnet 4" },
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" },
    { id: "claude-3-5-haiku-20241022", name: "Claude 3.5 Haiku" },
    { id: "claude-3-opus-20240229", name: "Claude 3 Opus" },
  ],
  google: [
    { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash" },
    { id: "gemini-2.0-flash-lite", name: "Gemini 2.0 Flash Lite" },
    { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro" },
    { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash" },
    { id: "gemini-1.5-flash-8b", name: "Gemini 1.5 Flash 8B" },
  ],
} as const;
