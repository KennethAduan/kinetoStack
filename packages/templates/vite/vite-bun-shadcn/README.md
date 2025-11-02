# kenStack - ShadCN UI + Vite Template

A modern, production-ready React template built with **ShadCN UI**, **Vite**, **TanStack Router**, **TanStack React Query**, **Jotai**, and **Tailwind CSS**. This template provides a solid foundation for building beautiful, accessible, and performant React applications.

## Features

- **ShadCN UI** - Beautiful, accessible components built with Radix UI
- **Vite** - Lightning-fast build tool and dev server
- **TanStack Router** - Type-safe, file-based routing with powerful navigation
- **TanStack React Query** - Powerful data synchronization with automatic caching
- **Jotai** - Primitive and flexible state management with atomic state
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Dark Mode** - Built-in theme provider with system preference support
- **TypeScript** - Full type safety out of the box
- **React 19** - Latest React features with React Compiler
- **File-based Routing** - Automatic route generation from file structure
- **Lucide Icons** - Beautiful, customizable icon library

## Tech Stack

- **React** 19.1.1 - UI library
- **Vite** 7.1.7 - Build tool and dev server
- **TanStack Router** 1.134.4 - Type-safe routing
- **TanStack React Query** 5.90.6 - Data fetching and caching
- **Jotai** 2.15.1 - State management
- **ShadCN UI** - Component library
- **Tailwind CSS** 4.1.16 - Styling
- **TypeScript** 5.9.3 - Type safety
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** (recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/KennethAduan/kenStack-shadcn-vite.git
cd kenStack-shadcn-vite
```

2. **Install dependencies**

Using npm:

```bash
npm install
```

Using bun:

```bash
bun install
```

3. **Start the development server**

Using npm:

```bash
npm run dev
```

Using bun:

```bash
bun run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Project Structure

```
kenStack-shadcn-vite/
├── src/
│   ├── atoms/              # Jotai state atoms
│   │   └── index.ts
│   ├── components/         # React components
│   │   ├── ui/            # ShadCN UI components
│   │   └── mode-toogle.tsx
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── providers/         # React context providers
│   │   ├── index.tsx
│   │   ├── ReactQuery.provider.tsx
│   │   └── theme-provider.tsx
│   ├── routes/            # TanStack Router file-based routes
│   │   ├── __root.tsx    # Root layout
│   │   └── index.tsx     # Home page
│   ├── index.css         # Global styles
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── package.json
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## Usage Examples

### Using Jotai for State Management

```typescript
import { useAtom } from "jotai";
import { countAtom } from "@/atoms";

function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Using TanStack React Query

```typescript
import { useQuery } from "@tanstack/react-query";

function UserProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/user");
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data.name}</div>;
}
```

### Creating a New Route

Create a new file in `src/routes/`:

```typescript
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <div>About Page</div>;
}
```

The route will be automatically available at `/about`.

### Using ShadCN UI Components

```typescript
import { Button } from "@/components/ui/button";

function MyComponent() {
  return (
    <Button variant="outline" size="lg">
      Click me
    </Button>
  );
}
```

### Adding More ShadCN Components

1. Visit [ShadCN UI](https://ui.shadcn.com)
2. Run the component installation command
3. Components will be added to `src/components/ui/`

## Theming

The template includes a built-in theme provider with dark mode support. The theme automatically syncs with system preferences.

```typescript
import { useTheme } from "@/providers/theme-provider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Useful Links

- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Vite Documentation](https://vite.dev)
- [TanStack Router Documentation](https://tanstack.com/router)
- [TanStack Query Documentation](https://tanstack.com/query)
- [Jotai Documentation](https://jotai.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## License

This template is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KennethAduan/kenStack-shadcn-vite/issues).

## Acknowledgments

- [ShadCN](https://twitter.com/shadcn) for the amazing component library
- [Vite Team](https://github.com/vitejs) for the incredible build tool
- [TanStack](https://tanstack.com) for the excellent React tools
- [Jotai](https://jotai.org) for the simple state management solution

---

Made with love by [Kenneth Aduan](https://github.com/KennethAduan)
