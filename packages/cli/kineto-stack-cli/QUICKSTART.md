# kineto-stack-cli - Quick Start Guide

## Installation

### For Local Development (Current Setup)

1. **Install dependencies:**

   ```bash
   bun install
   # or
   npm install
   ```

2. **Build the project:**

   ```bash
   bun run build
   # or
   npm run build
   ```

3. **Link globally for local testing:**

   ```bash
   npm link
   ```

4. **Verify installation:**
   ```bash
   kenstack --version
   ```

## Usage

### Create a New Project

Simply run:

```bash
kenstack create my-project
```

You'll be prompted to:

1. **Select a template:**
   - KenStack Bun Next.js Mantine
   - KenStack Vite ShadCN

2. **Choose package manager** (for Vite template):
   - npm
   - yarn
   - pnpm
   - bun

### What Happens Next

The CLI will automatically:

- ✅ Clone the selected template repository
- ✅ Remove the template's Git history
- ✅ Initialize a fresh Git repository
- ✅ Install all dependencies
- ✅ Display next steps

### Example Output

```
→ Which template would you like to use?
  KenStack Bun Next.js Mantine - Next.js 16 + Bun + Mantine + TanStack Query + Jotai

✓ Cloning KenStack Bun Next.js Mantine template...
✓ Template cloned successfully
→ Initializing Git repository...
✓ Installing dependencies with bun...
✓ Dependencies installed successfully
✓ Project "my-project" created successfully!

📁 Next steps:
  cd my-project
  npm run dev
```

## Testing Both Templates

### Test Bun Next.js Mantine Template

```bash
kenstack create test-bun-app
# Select: KenStack Bun Next.js Mantine
# It will use Bun automatically
```

### Test Vite ShadCN Template

```bash
kenstack create test-vite-app
# Select: KenStack Vite ShadCN
# Choose your preferred package manager
```

## Troubleshooting

### "Command not found: kenstack"

Make sure you ran `npm link` after building the project.

### "Directory already exists"

Choose a different project name or delete the existing directory.

### "No package manager detected"

Install at least one of: npm, yarn, pnpm, or bun.

### Build Errors

Run:

```bash
bun run build
# or
npm run build
```

Then retry the command.

## Next Steps After Project Creation

Once your project is created:

1. Navigate to the project:

   ```bash
   cd my-project
   ```

2. Start the development server:

   ```bash
   # For Bun/Next.js template
   bun dev

   # For Vite template
   npm run dev
   ```

3. Open your browser:
   - Next.js: http://localhost:3000
   - Vite: http://localhost:5173

## Publishing to npm (Future)

When ready to publish:

1. Update `package.json` version
2. Login to npm:

   ```bash
   npm login
   ```

3. Publish:

   ```bash
   npm publish
   ```

4. Users can then run:
   ```bash
   npx kenstack-cli create my-app
   ```

## Development Commands

```bash
# Run in development mode
bun run dev create test-app

# Build the CLI
bun run build

# Lint the code
bun run lint
```

## Project Structure

```
kenStack-cli/
├── src/
│   ├── index.ts              # CLI entry point
│   ├── commands/
│   │   └── create.ts         # Create command logic
│   ├── utils/
│   │   ├── templates.ts      # Template definitions
│   │   ├── git.ts           # Git operations
│   │   ├── install-deps.ts  # Package manager logic
│   │   └── logger.ts        # Console output
│   └── types/
│       └── index.ts         # TypeScript types
├── bin/
│   └── kenstack.js          # Executable entry
├── dist/                    # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

## Adding New Templates

To add more templates, edit `src/utils/templates.ts`:

```typescript
export const templates: Template[] = [
  {
    id: "my-new-template",
    name: "My New Template",
    description: "Description here",
    repository: "https://github.com/user/repo.git",
    packageManager: "npm", // or "yarn", "pnpm", "bun"
  },
  // ... existing templates
];
```

Then rebuild:

```bash
bun run build
```

## Support

For issues or questions:

- Check the main [README.md](./README.md)
- Open an issue on GitHub
- Review template repositories for framework-specific help

---

**Happy building! 🚀**
