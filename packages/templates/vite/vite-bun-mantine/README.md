# kineto-stack Bun Vite Mantine Template

A modern, production-ready Vite template built with Bun runtime, featuring Mantine UI, TanStack Query, TanStack Router, and Jotai for state management. This template provides a solid foundation for building scalable React applications with TypeScript, theme switching, and optimal developer experience.

## Tech Stack

### Core Framework

- **Vite 7.1.7** - Next-generation frontend tooling
- **React 19.1.1** - Latest React version with improved features
- **TypeScript 5** - Type-safe development

### Runtime & Package Manager

- **Bun 1.2.4+** - Fast JavaScript runtime and package manager

### UI & Styling

- **Mantine 8.3.6** - Comprehensive React component library
- **PostCSS** - CSS processing with Mantine preset
- **Tabler Icons React 3.35.0** - Beautiful open-source icons

### Routing

- **TanStack Router 1.134.9** - Type-safe routing for React
- **TanStack Router DevTools** - Development tools for routing

### State Management & Data Fetching

- **TanStack Query 5.90.6** - Powerful data synchronization for React
- **Jotai 2.15.1** - Primitive and flexible state management for React

### React Compiler

- **babel-plugin-react-compiler** - Automatic optimization for React components

## Features

### Theme Management

- Built-in theme switcher component supporting:
  - Light mode
  - Dark mode
  - Auto mode (follows system preference)
- Theme preference persisted in localStorage
- Seamless theme transitions across the application
- Fixed header with theme switcher button

### Type-Safe Routing

- TanStack Router for type-safe, file-based routing
- Auto code splitting for optimal performance
- Route tree generation for better DX
- Router DevTools for debugging

### React Query Integration

- Optimized QueryClient configuration
- Default query options set up
- Easy to extend with custom queries and mutations

### State Management

- Jotai atoms setup for local state management
- Type-safe atom definitions
- Easy to extend with custom atoms

### Developer Experience

- TypeScript configured with strict mode
- ESLint with React recommended rules
- React Compiler enabled for automatic optimizations
- Hot module replacement (HMR) in development
- PostCSS with Mantine breakpoint variables
- Fast refresh for instant updates

### Project Structure

```
src/
├── main.tsx                  # Application entry point
├── providers/               # React context providers
│   ├── index.tsx           # Main provider wrapper
│   └── ReactQuery.provider.tsx  # TanStack Query provider
├── components/              # Reusable React components
│   └── ThemeSwitcher.tsx   # Theme switcher component
└── routes/                 # TanStack Router routes
    ├── __root.tsx          # Root route layout
    ├── index.tsx           # Home page
    └── routeTree.gen.ts    # Generated route tree
```

## Getting Started

### Prerequisites

- **Bun** 1.2.4 or higher installed on your system

Install Bun if you haven't already:

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Installation

1. Clone the repository or use this template:

```bash
git clone <repository-url>
cd kineto-stack-bun-mantine-vite
```

2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:5172](http://localhost:5172) in your browser

## Available Scripts

- `bun dev` - Start development server on port 5172
- `bun build` - Build production-ready application
- `bun preview` - Preview production build locally
- `bun lint` - Run ESLint to check code quality

## Configuration Files

### TypeScript (`tsconfig.json`)

- Strict type checking enabled
- React JSX support
- Modern ES2022 target
- Module resolution configured for Vite

### Vite (`vite.config.ts`)

- React plugin with Fast Refresh
- TanStack Router plugin with auto code splitting
- React Compiler integration

### PostCSS (`postcss.config.cjs`)

- Mantine preset for CSS processing
- Breakpoint variables for responsive design:
  - xs: 36em
  - sm: 48em
  - md: 62em
  - lg: 75em
  - xl: 88em

### ESLint (`eslint.config.js`)

- React recommended rules
- React hooks linting
- Modern ESLint flat config

## Key Features Explained

### Theme Switcher

The theme switcher component (`src/components/ThemeSwitcher.tsx`) provides a simple interface for users to toggle between light, dark, and auto themes. It uses Mantine's `useMantineColorScheme` hook and displays appropriate icons for each mode.

**Usage:**

```tsx
import ThemeSwitcher from "../components/ThemeSwitcher";

<ThemeSwitcher />;
```

### TanStack Router

File-based routing with automatic route generation. Create new routes by adding files in the `src/routes/` directory:

```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <div>About Page</div>;
}
```

### React Query Setup

The React Query configuration is provided in `src/providers/ReactQuery.provider.tsx`. Customize the default options:

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Adjust as needed
      // Add more default options
    },
  },
});
```

### State Management with Jotai

Create atoms in separate files and use them throughout your app:

```typescript
import { atom } from "jotai";

export const myAtom = atom<string>("default value");
```

**Usage in components:**

```tsx
import { useAtom } from "jotai";
import { myAtom } from "@/atoms";

const [value, setValue] = useAtom(myAtom);
```

### Mantine Theme Customization

Customize the Mantine theme in `src/providers/index.tsx`:

```typescript
const theme = createTheme({
  primaryColor: "blue",
  fontFamily: "Open Sans, sans-serif",
  // Add more theme customizations
});
```

## Customization

### Adding New Routes

1. Create route files in `src/routes/`
2. Use `createFileRoute` from TanStack Router
3. Routes are automatically generated in `routeTree.gen.ts`

### Adding New Components

1. Create component files in `src/components/`
2. Use TypeScript for type safety
3. Follow the existing component patterns
4. Export components for reuse

### Extending Providers

The main provider wrapper (`src/providers/index.tsx`) combines all context providers. Add new providers by wrapping the children:

```tsx
<MantineProvider>
  <JotaiProvider>
    <ReactQueryProvider>
      <YourNewProvider>{children}</YourNewProvider>
    </ReactQueryProvider>
  </JotaiProvider>
</MantineProvider>
```

## Best Practices

### Code Organization

- Keep components small and focused
- Use TypeScript interfaces for props
- Extract reusable logic into custom hooks
- Use TanStack Query for server state
- Use Jotai atoms for local component state

### Styling

- Use Mantine components when possible
- Leverage Mantine's style props for consistency
- Use responsive utilities for breakpoints
- Maintain consistent spacing using Mantine's spacing scale

### TypeScript

- Enable strict mode (already configured)
- Define interfaces for all props and data structures
- Avoid using `any` type
- Leverage TypeScript's inference capabilities

## Deployment

### Build for Production

```bash
bun build
```

This creates an optimized production build in the `dist` directory.

### Deploy to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Configure build command: `bun build`
4. Set output directory to `dist`
5. Your app will be deployed automatically

### Deploy to Other Platforms

This template works with any platform that supports static sites:

- **Netlify** - Configure build command: `bun build` and output: `dist`
- **GitHub Pages** - Use GitHub Actions to build and deploy
- **Cloudflare Pages** - Automatic static site deployment
- **Self-hosted** - Serve the `dist` directory with any web server

## Browser Support

This template supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learning Resources

### Vite

- [Vite Documentation](https://vite.dev)
- [Vite Plugin API](https://vite.dev/plugin/)

### Mantine

- [Mantine Documentation](https://mantine.dev)
- [Mantine Components](https://mantine.dev/core/)
- [Mantine Theming](https://mantine.dev/theming/mantine-provider/)

### TanStack

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [React Query Guide](https://tanstack.com/query/latest/docs/react/overview)

### Jotai

- [Jotai Documentation](https://jotai.org)
- [Jotai Basics](https://jotai.org/docs/basics/concepts)

### Bun

- [Bun Documentation](https://bun.sh/docs)
- [Bun Runtime](https://bun.sh)

### React

- [React Documentation](https://react.dev)
- [React Compiler](https://react.dev/learn/react-compiler)

## Contributing

When contributing to this template:

1. Follow the existing code style
2. Use TypeScript for all new files
3. Add appropriate type definitions
4. Test your changes thoroughly
5. Update documentation if needed

## License

This template is available for use in personal and commercial projects. Customize it to fit your needs.

## Support

For issues and questions:

- Check the documentation of respective libraries
- Review Vite, Mantine, and TanStack documentation
- Open an issue in the repository if you find bugs

## Version

Current template version: 0.1.0

---

Built with modern web technologies for optimal developer experience and performance.
