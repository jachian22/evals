# Evals (made simple)

Evals is a web app built on the t3 stack for testing models and prompts against eachother for cases where you need to know your costs or accuracy bottlenecks for your LLM workflows. Notably I built this for flows involving PDF extraction but this can be easily modified for other document types.

For fun I used this as an opportunity to use tRPC for what it simplifies in maintainability as more models get released and new model providers come out of stealth; a core feature to any eval tool that will get real use.

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (`corepack enable` or `npm install -g pnpm`)
- PostgreSQL database

### Installation

```bash
git clone <repo-url>
cd evals
pnpm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/evals"

# At least one API key required for running evals
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
```

### Database Setup

```bash
# Generate Prisma client and run migrations
pnpm db:generate

# Or push schema directly (for development)
pnpm db:push
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other Commands

| Command | Description |
|---------|-------------|
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm db:studio` | Open Prisma Studio |
| `pnpm check` | Run linting and type checks |
| `pnpm format:write` | Format code with Prettier |

## Next Steps

Right now it's a flexible MVP that's workable for many situations you'd want to setup evals for LLM work involving PDF data extraction. What I plan to add next:

- cost parameters for comparisons
- compartmentalizing different eval sets
- solving for single run bias (averaging across several runs)