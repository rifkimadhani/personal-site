import {
  Boxes,
  Braces,
  Cable,
  ClipboardList,
  Database,
  FileText,
  Layers,
  Monitor,
  Plus,
  Server,
} from "lucide-react";

import { ProjectParallax, TiltSurface } from "@/components/portfolio-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { caseStudies } from "@/lib/portfolio";

type CaseStudy = (typeof caseStudies)[number];

const diagramIcons = {
  "hospitality-cms": [Layers, Cable, Monitor],
  "clinic-operations": [ClipboardList, Boxes, FileText],
  "linux-services": [Server, Braces, Database],
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article id={study.id} aria-labelledby={`${study.id}-title`}>
      <TiltSurface>
        <Card className="project-card gap-0 py-0 md:grid md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:flex">
          <ProjectParallax project={study.id}>
            {study.diagram.map((label, index) => {
              const Icon = diagramIcons[study.id][index];
              return (
                <div className="project-node" key={label}>
                  <span className="project-node-icon"><Icon className="size-5" /></span>
                  <span className="project-node-label">{label}</span>
                </div>
              );
            })}
          </ProjectParallax>
          <CardContent className="min-w-0 p-5 sm:p-6">
            <p className="eyebrow">{study.category}</p>
            <h3 id={`${study.id}-title`} className="project-title mt-2 text-2xl font-semibold tracking-[-0.045em] text-balance">
              {study.title}
            </h3>
            <p className="project-summary mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
            <ul aria-label="Technologies" role="list" className="mt-4 flex flex-wrap gap-1.5">
              {study.stack.map((tool) => (
                <li key={tool}><Badge variant="secondary" className="rounded-md font-mono">{tool}</Badge></li>
              ))}
            </ul>
            <details className="group/notes mt-4 border-t border-border">
              <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-sm py-2 text-sm font-medium text-primary hover:text-foreground [&::-webkit-details-marker]:hidden">
                <Plus className="size-4 transition-transform group-open/notes:rotate-45 motion-reduce:transition-none" aria-hidden="true" />
                <span>Engineering notes<span className="sr-only"> for {study.title}</span></span>
              </summary>
              <div className="grid gap-4 pb-1 pt-2">
                <div>
                  <h4 className="text-sm font-semibold">What I worked on</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.contribution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Engineering challenge</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
                </div>
              </div>
            </details>
          </CardContent>
        </Card>
      </TiltSurface>
    </article>
  );
}
