import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import { Github } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex justify-between items-center px-4 py-4 mx-auto">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl font-bold">kineto-stack</h1>
            <span className="text-sm text-muted-foreground">Template</span>
          </div>
          <ModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-16 mx-auto">
        <div className="mx-auto space-y-8 max-w-4xl text-center">
          {/* Hero Section */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Built with <span className="text-primary">ShadCN UI</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              A modern React template powered by ShadCN UI, Vite, Tailwind CSS,
              TanStack React Query, and Jotai. Start building beautiful,
              accessible applications with state management and data fetching in
              minutes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center pt-4 sm:flex-row">
            <Button size="lg" asChild>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started with ShadCN
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/KennethAduan/kineto-stack/tree/main/packages/templates/vite/vite-bun-shadcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Template Repo
              </a>
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="pt-12 space-y-6">
            <h3 className="text-2xl font-semibold">Powered by</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* ShadCN UI */}
              <div className="p-6 space-y-3 rounded-lg border transition-colors hover:border-primary">
                <div className="flex gap-2 justify-center items-center">
                  <Github className="size-5 text-muted-foreground" />
                  <h4 className="font-semibold">ShadCN UI</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Beautifully designed components built with Radix UI and
                  Tailwind CSS.
                </p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a
                    href="https://github.com/shadcn-ui/ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* Vite */}
              <div className="p-6 space-y-3 rounded-lg border transition-colors hover:border-primary">
                <div className="flex gap-2 justify-center items-center">
                  <Github className="size-5 text-muted-foreground" />
                  <h4 className="font-semibold">Vite</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Next-generation frontend tooling for lightning-fast
                  development.
                </p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a
                    href="https://github.com/vitejs/vite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* Tailwind CSS */}
              <div className="p-6 space-y-3 rounded-lg border transition-colors hover:border-primary">
                <div className="flex gap-2 justify-center items-center">
                  <Github className="size-5 text-muted-foreground" />
                  <h4 className="font-semibold">Tailwind CSS</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  A utility-first CSS framework for rapidly building custom
                  designs.
                </p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* TanStack React Query */}
              <div className="p-6 space-y-3 rounded-lg border transition-colors hover:border-primary">
                <div className="flex gap-2 justify-center items-center">
                  <Github className="size-5 text-muted-foreground" />
                  <h4 className="font-semibold">TanStack Query</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Powerful data synchronization for React with automatic
                  caching, background updates, and infinite query capabilities.
                </p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a
                    href="https://github.com/TanStack/query"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* Jotai */}
              <div className="p-6 space-y-3 rounded-lg border transition-colors hover:border-primary">
                <div className="flex gap-2 justify-center items-center">
                  <Github className="size-5 text-muted-foreground" />
                  <h4 className="font-semibold">Jotai</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Primitive and flexible state management for React. Build
                  scalable applications with atomic state.
                </p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a
                    href="https://github.com/pmndrs/jotai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* TanStack Router */}
              <div className="p-6 space-y-3 rounded-lg border transition-colors hover:border-primary">
                <div className="flex gap-2 justify-center items-center">
                  <Github className="size-5 text-muted-foreground" />
                  <h4 className="font-semibold">TanStack Router</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Type-safe routing for React applications with file-based
                  routing and powerful navigation features.
                </p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a
                    href="https://github.com/TanStack/router"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
