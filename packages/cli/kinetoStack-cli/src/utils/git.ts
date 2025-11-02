import { execSync } from "child_process";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const degit = require("degit");
import fs from "fs";
import path from "path";

export async function cloneRepository(
  repository: string,
  targetPath: string
): Promise<void> {
  const emitter = degit(repository);

  await emitter.clone(targetPath);
}

export function removeGitFolder(projectPath: string): void {
  const gitPath = path.join(projectPath, ".git");
  if (fs.existsSync(gitPath)) {
    fs.rmSync(gitPath, { recursive: true, force: true });
  }
}

export function initGitRepository(projectPath: string): void {
  try {
    execSync("git init", { cwd: projectPath, stdio: "ignore" });
  } catch (error) {
    throw new Error("Failed to initialize Git repository");
  }
}

