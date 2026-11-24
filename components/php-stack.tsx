import { Braces, Database, Globe2, Server, Workflow } from "lucide-react";

import { StackParallax } from "@/components/portfolio-motion";

const layers = [
  { name: "Web server", tools: "Nginx / Apache", Icon: Globe2 },
  { name: "Application", tools: "PHP / Laravel", Icon: Braces },
  { name: "Database", tools: "MySQL / MariaDB", Icon: Database },
];

export function PhpStack() {
  return (
    <StackParallax>
      <figure className="rounded-xl border border-border bg-card shadow-2xl shadow-black/25">
        <figcaption className="flex items-center gap-2.5 border-b border-border px-3 py-3 text-sm font-medium lg:px-5 lg:py-4">
          <Workflow className="size-4 text-primary" aria-hidden="true" />
          A typical PHP stack
        </figcaption>
        <div className="p-3 lg:p-5">
          <p className="mb-2 font-mono text-xs text-primary lg:mb-3">HTTP request</p>
          <ol className="ml-1.5 grid gap-2 border-l border-primary/30 pl-3.5 lg:gap-2.5">
            {layers.map(({ name, tools, Icon }) => (
              <li key={name} className="relative flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-border bg-secondary/70 p-1.5 lg:gap-x-2.5 lg:p-2.5">
                <span className="absolute top-1/2 -left-3.5 w-3.5 border-t border-primary/40" aria-hidden="true" />
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-background/70 text-primary lg:size-8">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">{name}</span>
                <span className="ms-auto font-mono text-xs text-muted-foreground">{tools}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-border px-3 py-2 text-xs text-muted-foreground lg:px-5 lg:py-3">
          <span className="flex items-center gap-2 font-mono">
            <Server className="size-3.5" aria-hidden="true" />
            Linux host
          </span>
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-1 w-2 rounded-full bg-primary/30" />
            <i className="h-1 w-2 rounded-full bg-primary/50" />
            <i className="h-1 w-2 rounded-full bg-primary/80" />
          </span>
        </div>
      </figure>
    </StackParallax>
  );
}
