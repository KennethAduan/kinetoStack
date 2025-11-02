import { ThemeToggle } from "@/components/ThemeToggle";
import { Zap, Code2, Palette, Rocket, Github, Package } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Header with Theme Toggle */}
      <header className="absolute top-0 right-0 p-6">
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-4xl space-y-16">
          {/* Main Heading */}
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              <Package className="h-4 w-4" />
              Kineto Stack Template
            </div>
            <h1 className="bg-linear-to-r from-zinc-900 to-zinc-700 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-zinc-100 dark:to-zinc-400 sm:text-6xl lg:text-7xl">
              Next.js + Bun
              <br />
              <span className="text-zinc-600 dark:text-zinc-400">
                Powered by ShadCN
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              A modern, high-performance stack combining Next.js, Bun runtime,
              ShadCN UI, and React Query for building fast, scalable web
              applications.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Lightning Fast"
              description="Powered by Bun runtime for unparalleled performance and speed"
            />
            <FeatureCard
              icon={<Code2 className="h-6 w-6" />}
              title="Next.js 16"
              description="Built on the latest Next.js with App Router and React Server Components"
            />
            <FeatureCard
              icon={<Palette className="h-6 w-6" />}
              title="ShadCN UI"
              description="Beautiful, accessible components built with Radix UI and Tailwind CSS"
            />
            <FeatureCard
              icon={<Rocket className="h-6 w-6" />}
              title="React Query"
              description="Powerful data fetching and caching with TanStack Query integration"
            />
            <FeatureCard
              icon={<Code2 className="h-6 w-6" />}
              title="TypeScript"
              description="Full type safety and excellent developer experience"
            />
            <FeatureCard
              icon={<Palette className="h-6 w-6" />}
              title="Dark Mode"
              description="Built-in theme switching with next-themes support"
            />
          </div>

          {/* Tech Stack */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Next.js 16",
                "React 19",
                "Bun",
                "TypeScript",
                "Tailwind CSS",
                "ShadCN UI",
                "React Query",
                "Jotai",
                "Zustand",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/KennethAduan/kineto-stack/tree/main/packages/templates/next/next-js-bun-shadcn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Built with ❤️ using{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Kineto Stack
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <div className="mb-4 inline-flex rounded-lg bg-zinc-100 p-3 text-zinc-900 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:group-hover:bg-zinc-800">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
