import { Template } from "../types";

// Base repository URL for the turbo repo
const KINETO_STACK_REPO = "https://github.com/KennethAduan/kineto-stack.git";

export const templates: Template[] = [
  {
    id: "bun-nextjs-mantine",
    name: "kineto-stack Bun Next.js Mantine",
    description: "Next.js 16 + Bun + Mantine + TanStack Query + Jotai",
    repository: `${KINETO_STACK_REPO}#packages/templates/next/next-js-bun-mantine`,
    packageManager: "bun",
  },
  {
    id: "vite-shadcn",
    name: "kineto-stack Vite ShadCN",
    description:
      "Vite + React + ShadCN + Tailwind CSS + TanStack Query + Jotai + TanStack Router",
    repository: `${KINETO_STACK_REPO}#packages/templates/vite/vite-bun-shadcn`,
    packageManager: "bun",
  },
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find((template) => template.id === id);
}

export function getTemplateChoices() {
  return templates.map((template) => ({
    name: `${template.name} - ${template.description}`,
    value: template.id,
  }));
}
