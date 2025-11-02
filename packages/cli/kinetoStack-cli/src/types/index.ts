export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export interface Template {
  id: string;
  name: string;
  description: string;
  repository: string;
  packageManager: PackageManager;
}

export interface CreateOptions {
  projectName: string;
  template: Template;
  packageManager?: PackageManager;
}

