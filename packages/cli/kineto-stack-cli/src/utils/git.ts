import { execSync } from "child_process";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const degit = require("degit");
import fs from "fs";
import path from "path";

export async function cloneRepository(
  repository: string,
  targetPath: string
): Promise<void> {
  try {
    const emitter = degit(repository, {
      cache: false,
      verbose: true,
    });

    await emitter.clone(targetPath);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    // Provide more helpful error messages
    if (
      errorMessage.includes("could not find commit hash") ||
      errorMessage.includes("not found")
    ) {
      throw new Error(
        `Template not found. Please ensure:\n` +
          `1. The repository exists at: ${repository}\n` +
          `2. The repository is public or you have access\n` +
          `3. The subdirectory path is correct\n\n` +
          `Original error: ${errorMessage}`
      );
    }

    throw error;
  }
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
