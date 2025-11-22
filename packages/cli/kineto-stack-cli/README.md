# kineto-stack-cli

A powerful CLI tool to quickly scaffold kineto-stack templates for modern web development. Choose from 4 production-ready templates (Next.js or Vite, with Mantine or ShadCN UI) to kickstart your project instantly.

## Features

- **Interactive Template Selection** - Choose from 4 production-ready templates
- **Automatic Dependency Installation** - Let the CLI handle package management with Bun
- **Beautiful Terminal Output** - Colored logs and spinners for better UX
- **Full Project Setup** - Includes Git initialization, dependencies, and project configuration
- **Modern Tech Stack** - Latest versions of React, Next.js, Vite, and more
- **Type-Safe Templates** - All templates include TypeScript with strict mode
- **State Management Built-in** - Jotai for client state, TanStack Query for server state

## Available Templates

### Next.js Templates

#### 1. Next.js + Bun + Mantine

- **Tech Stack**: Next.js 16, React 19, Bun, Mantine UI, TanStack Query, Jotai
- **Best For**: Full-stack applications with comprehensive UI components
- **Package Manager**: Bun
- **Features**: App Router, SSR support, theme switcher (light/dark/auto), TypeScript strict mode
- **Source**: [kineto-stack](https://github.com/KennethAduan/kineto-stack) (Turbo Repo Template)

#### 2. Next.js + Bun + ShadCN

- **Tech Stack**: Next.js 16, React 19, Bun, ShadCN UI, Tailwind CSS 4, TanStack Query, Jotai
- **Best For**: Full-stack applications with accessible, customizable components
- **Package Manager**: Bun
- **Features**: App Router, SSR support, dark mode with system preference, Radix UI primitives
- **Source**: [kineto-stack](https://github.com/KennethAduan/kineto-stack) (Turbo Repo Template)

### Vite Templates

#### 3. Vite + Bun + Mantine

- **Tech Stack**: Vite 7, React 19, Bun, Mantine UI, TanStack Router, TanStack Query, Jotai
- **Best For**: Fast SPA development with type-safe routing and comprehensive UI components
- **Package Manager**: Bun
- **Features**: File-based routing, auto code splitting, theme switcher, React Compiler
- **Source**: [kineto-stack](https://github.com/KennethAduan/kineto-stack) (Turbo Repo Template)

#### 4. Vite + Bun + ShadCN

- **Tech Stack**: Vite 7, React 19, Bun, ShadCN UI, Tailwind CSS 4, TanStack Router, TanStack Query, Jotai
- **Best For**: Fast SPA development with accessible components and type-safe routing
- **Package Manager**: Bun
- **Features**: File-based routing, auto code splitting, dark mode, Radix UI primitives
- **Source**: [kineto-stack](https://github.com/KennethAduan/kineto-stack) (Turbo Repo Template)

## Installation

### Option 1: Using npx (Recommended)

```bash
npx kineto-stack-cli create my-app
```

### Option 2: Global Installation

```bash
npm install -g kineto-stack-cli
kineto-stack create my-app
```

### Option 3: Local Development

```bash
# Clone the repository
git clone https://github.com/KennethAduan/kineto-stack.git
cd kineto-stack/packages/cli/kineto-stack-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link globally for testing
npm link

# Use it
kineto-stack create my-app
```

## Usage

### Basic Usage

```bash
kineto-stack create <project-name>
```

Example:

```bash
kineto-stack create my-awesome-app
```

### Interactive Flow

1. **Choose a Template**
   - Select from 4 available templates:
     - Next.js + Bun + Mantine
     - Next.js + Bun + ShadCN
     - Vite + Bun + Mantine
     - Vite + Bun + ShadCN

2. **Automatic Setup**
   - Template cloning from GitHub
   - Dependency installation with Bun
   - Git repository initialization

3. **Start Development**
   ```bash
   cd my-awesome-app
   bun dev
   ```

## Project Structure

After creating a project, you'll have:

```
my-awesome-app/
├── src/              # Source code
├── public/           # Static assets
├── node_modules/     # Dependencies
├── .git/            # Git repository
├── package.json     # Project configuration
└── ...
```

## Development

### Building the CLI

```bash
npm run build
```

### Running in Development Mode

```bash
npm run dev create my-app
```

### Linting

```bash
npm run lint
```

## Requirements

- **Node.js**: >= 18.0.0
- **Bun**: >= 1.2.4 (recommended package manager for all templates)
- **Git**: For cloning templates

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Kenneth Aduan**

- GitHub: [@KennethAduan](https://github.com/KennethAduan)

## Acknowledgments

### Core Frameworks

- [Next.js](https://nextjs.org/) - React framework with App Router
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager

### UI Frameworks

- [Mantine](https://mantine.dev/) - Comprehensive React component library
- [ShadCN UI](https://ui.shadcn.com/) - Accessible component library built with Radix UI
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### Tools & Libraries

- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [Jotai](https://jotai.org/) - Primitive state management
- [degit](https://github.com/Rich-Harris/degit) - Straightforward project scaffolding
- [Commander.js](https://github.com/tj/commander.js) - CLI framework
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Interactive command-line prompts

## Troubleshooting

### "Directory already exists"

Make sure the project name doesn't conflict with an existing directory.

### "Bun not found"

Install Bun from [https://bun.sh](https://bun.sh) if it's not already installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

### "Failed to clone repository"

Check your internet connection and ensure you have Git installed.

## Support

For issues and questions:

- Open an issue on [GitHub](https://github.com/KennethAduan/kineto-stack/issues)
- Check the template repositories for framework-specific help

---

**Happy Coding!**
