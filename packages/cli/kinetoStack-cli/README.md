# kinetoStack CLI

A powerful CLI tool to quickly scaffold KenStack templates for modern web development. Choose between Next.js with Mantine or Vite with ShadCN to kickstart your project instantly.

## ✨ Features

- 🚀 **Interactive Template Selection** - Choose your preferred stack with ease
- 📦 **Automatic Dependency Installation** - Let the CLI handle package management
- 🎨 **Beautiful Terminal Output** - Colored logs and spinners for better UX
- ⚡ **Multiple Package Managers** - Supports npm, yarn, pnpm, and bun
- 🔧 **Full Project Setup** - Includes Git initialization and dependencies

## 📋 Available Templates

### 1. KenStack Bun Next.js Mantine

- **Tech Stack**: Next.js 16, Bun, Mantine, TanStack Query, Jotai
- **Best For**: Full-stack applications with beautiful UI components
- **Package Manager**: Bun
- **Source**: [kinetoStack](https://github.com/KennethAduan/kinetoStack) (Turbo Repo Template)

### 2. KenStack Vite ShadCN

- **Tech Stack**: Vite, React, ShadCN, Tailwind CSS
- **Best For**: Fast, modern React applications with accessible components
- **Package Manager**: npm, yarn, pnpm, or bun (your choice)
- **Source**: [kinetoStack](https://github.com/KennethAduan/kinetoStack) (Turbo Repo Template)

## 🚀 Installation

### Option 1: Using npx (Recommended)

```bash
npx kenstack-cli create my-app
```

### Option 2: Global Installation

```bash
npm install -g kenstack-cli
kenstack create my-app
```

### Option 3: Local Development

```bash
# Clone the repository
git clone https://github.com/KennethAduan/kenStack-cli.git
cd kenStack-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link globally for testing
npm link

# Use it
kenstack create my-app
```

## 💻 Usage

### Basic Usage

```bash
kenstack create <project-name>
```

Example:

```bash
kenstack create my-awesome-app
```

### Interactive Flow

1. **Choose a Template**
   - Select between KenStack Bun Next.js Mantine or KenStack Vite ShadCN

2. **Select Package Manager** (for Vite template)
   - Choose npm, yarn, pnpm, or bun

3. **Automatic Setup**
   - Template cloning
   - Dependency installation
   - Git initialization

4. **Start Development**
   ```bash
   cd my-awesome-app
   npm run dev
   ```

## 📁 Project Structure

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

## 🛠️ Development

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

## 📝 Requirements

- **Node.js**: >= 18.0.0
- **Git**: For cloning templates
- **Package Manager**: npm, yarn, pnpm, or bun (depending on template)

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Kenneth Aduan**

- GitHub: [@KennethAduan](https://github.com/KennethAduan)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Vite](https://vitejs.dev/)
- [Mantine](https://mantine.dev/)
- [ShadCN UI](https://ui.shadcn.com/)
- [degit](https://github.com/Rich-Harris/degit)
- [Commander.js](https://github.com/tj/commander.js)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

## 🐛 Troubleshooting

### "Directory already exists"

Make sure the project name doesn't conflict with an existing directory.

### "No package manager detected"

Install at least one package manager: npm, yarn, pnpm, or bun.

### "Failed to clone repository"

Check your internet connection and ensure you have Git installed.

## 📞 Support

For issues and questions:

- Open an issue on [GitHub](https://github.com/KennethAduan/kenStack-cli/issues)
- Check the template repositories for framework-specific help

---

**Happy Coding! 🎉**
