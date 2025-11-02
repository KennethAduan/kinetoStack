import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import path from "path";
import { existsSync } from "fs";
import {
  detectPackageManager,
  getPackageManagerChoices,
  installDependencies,
  isPackageManagerAvailable,
} from "../utils/install-deps";
import {
  initGitRepository,
  removeGitFolder,
  cloneRepository,
} from "../utils/git";
import { logger } from "../utils/logger";
import {
  getTemplateById,
  getTemplateChoices,
  templates,
} from "../utils/templates";
import { CreateOptions, PackageManager, Template } from "../types";

export async function createProject(options: CreateOptions): Promise<void> {
  const { projectName, template, packageManager } = options;

  // Validate project name
  if (!isValidProjectName(projectName)) {
    logger.error(
      "Invalid project name. Use only alphanumeric characters, hyphens, and underscores."
    );
    process.exit(1);
  }

  const targetPath = path.resolve(process.cwd(), projectName);

  // Check if directory already exists
  if (existsSync(targetPath)) {
    logger.error(`Directory "${projectName}" already exists.`);
    process.exit(1);
  }

  try {
    // Clone repository
    const spinner = ora(`Cloning ${template.name} template...`).start();
    await cloneRepository(template.repository, targetPath);
    spinner.succeed("Template cloned successfully");

    // Remove .git folder from template
    removeGitFolder(targetPath);

    // Initialize fresh Git repository
    logger.step("Initializing Git repository...");
    initGitRepository(targetPath);

    // Install dependencies
    const finalPackageManager = packageManager || template.packageManager;
    spinner.start(`Installing dependencies with ${finalPackageManager}...`);

    await installDependencies(targetPath, finalPackageManager);
    spinner.succeed("Dependencies installed successfully");

    // Success message
    logger.success(`Project "${projectName}" created successfully!`);
    console.log("\n📁 Next steps:");
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan("  npm run dev\n"));
  } catch (error) {
    logger.error(
      `Failed to create project: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    process.exit(1);
  }
}

export async function promptForOptions(
  projectName?: string
): Promise<CreateOptions> {
  // Template selection
  const templateAnswer = await inquirer.prompt({
    type: "list",
    name: "templateId",
    message: "Which template would you like to use?",
    choices: getTemplateChoices(),
  });

  const selectedTemplate = getTemplateById(templateAnswer.templateId);

  if (!selectedTemplate) {
    logger.error("Invalid template selected");
    process.exit(1);
  }

  let packageManager: string | undefined = selectedTemplate.packageManager;

  // If it's not the Bun template, ask for package manager preference
  if (selectedTemplate.id === "vite-shadcn") {
    const detectedManager = detectPackageManager();
    const pmChoices = getPackageManagerChoices();

    // Check which managers are available
    const availableManagers = pmChoices.filter((pm) =>
      isPackageManagerAvailable(pm.value)
    );

    if (availableManagers.length === 0) {
      logger.error(
        "No package manager detected. Please install npm, yarn, pnpm, or bun."
      );
      process.exit(1);
    }

    const pmAnswer = await inquirer.prompt({
      type: "list",
      name: "packageManager",
      message: "Which package manager would you like to use?",
      choices: availableManagers,
      default: detectedManager || "npm",
    });

    packageManager = pmAnswer.packageManager;
  }

  return {
    projectName: projectName || "my-app",
    template: selectedTemplate,
    packageManager: packageManager as PackageManager,
  };
}

function isValidProjectName(name: string): boolean {
  return /^[a-zA-Z0-9_-]+$/.test(name);
}
