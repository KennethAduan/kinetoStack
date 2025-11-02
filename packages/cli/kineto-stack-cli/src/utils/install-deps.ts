import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { PackageManager } from "../types";

export async function installDependencies(
  projectPath: string,
  packageManager: PackageManager
): Promise<void> {
  const isWindows = process.platform === "win32";
  const commands: Record<PackageManager, string> = {
    npm: "npm install",
    yarn: "yarn install",
    pnpm: "pnpm install",
    bun: "bun install",
  };

  const command = commands[packageManager];

  try {
    execSync(command, {
      cwd: projectPath,
      stdio: "inherit",
      ...(isWindows && { shell: "powershell.exe" }),
    });
  } catch (error) {
    throw new Error(`Failed to install dependencies with ${packageManager}`);
  }
}

export function detectPackageManager(): PackageManager | null {
  const userAgent = process.env.npm_config_user_agent || "";

  if (userAgent.includes("yarn")) return "yarn";
  if (userAgent.includes("pnpm")) return "pnpm";
  if (userAgent.includes("bun")) return "bun";
  if (userAgent.includes("npm")) return "npm";

  return null;
}

export function getPackageManagerChoices(): { name: string; value: PackageManager }[] {
  return [
    { name: "npm", value: "npm" },
    { name: "yarn", value: "yarn" },
    { name: "pnpm", value: "pnpm" },
    { name: "bun", value: "bun" },
  ];
}

export function isPackageManagerAvailable(packageManager: PackageManager): boolean {
  try {
    execSync(`${packageManager} --version`, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

