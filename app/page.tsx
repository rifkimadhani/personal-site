import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { Bug, Cable, Mail, MapPin, Server } from "lucide-react";
import Image from "next/image";

import { CaseStudyCard } from "@/components/case-study-card";
import { HeroCubesBackground } from "@/components/hero-cubes-background";
import { PhpStack } from "@/components/php-stack";
import { ContainerScroll, ScrollReveal } from "@/components/portfolio-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ResizableNavbar } from "@/components/ui/resizable-navbar";
import { approach, caseStudies, profile, services, siteUrl, stack } from "@/lib/portfolio";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const serviceIcons = {
  deployment: Server,
  maintenance: Bug,
  integration: Cable,
};

const socialProfiles = [
  { label: "GitHub", href: profile.github, Icon: IconBrandGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: IconBrandLinkedin },
  { label: "X", href: profile.x, Icon: IconBrandX },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: profile.name,
  url: siteUrl.href,
  publisher: {
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl.href,
    sameAs: socialProfiles.map(({ href }) => href),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#main">Skip to content</a>
      <ResizableNavbar
        links={navigation}
        logo={
          <a className="flex min-h-11 w-fit items-center gap-2 rounded-md text-base leading-none font-semibold tracking-tight whitespace-nowrap hover:text-primary md:text-lg" href="#top">
            <Image className="size-[1.125rem] shrink-0" src="/icon.svg" alt="" width={18} height={18} />
            <span>rifki<span className="text-primary">.</span></span>
          </a>
        }
        desktopActions={
          <div className="hidden items-center justify-self-end md:flex">
            {socialProfiles.filter(({ label }) => label !== "X").map(({ label, href, Icon }) => (
              // <Button key={href} asChild variant="outline" size="icon" className="contact-link size-11 rounded-full text-muted-foreground">
                <a key={href} href={href} aria-label={label} target="_blank" className="grid size-11 place-items-center rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              // </Button>
            ))}
          </div>
        }
      />

      <main id="main" tabIndex={-1}>
        <section id="top" className="relative isolate" aria-labelledby="hero-title">
          <HeroCubesBackground />
          <div className="page-frame hero-frame flex flex-col">
            <div className="grid grow content-center items-center gap-5 py-5 sm:gap-8 sm:py-7 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10 lg:py-[clamp(1.5rem,6svh,5.5rem)] xl:gap-16">
              <div className="hero-copy min-w-0">
                <p className="eyebrow flex items-center gap-2.5">
                  <span className="h-px w-5 bg-primary/65" aria-hidden="true" />
                  {profile.role}
                </p>
                <h1 id="hero-title" className="hero-title mt-4 font-semibold sm:mt-5">
                  <span className="block">Backend work.</span>
                  <span className="block text-primary">Beyond localhost.</span>
                </h1>
                <p className="mt-4 max-w-[43ch] text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                  I’m {profile.name}. I help small teams deploy, maintain, and troubleshoot
                  PHP applications and the Linux systems they run on.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7">
                  <Button asChild className="h-11"><a href="#contact">Discuss a project</a></Button>
                  <Button asChild variant="outline" className="h-11"><a href="#work">View selected work</a></Button>
                </div>
                <p className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground sm:mt-5">
                  <span className="mt-[0.44rem] size-2 shrink-0 rounded-full bg-available" aria-hidden="true" />
                  Open to small, fixed-scope remote projects
                </p>
              </div>
              <PhpStack />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-y border-border py-3 sm:py-4">
              <ul aria-label="Core technologies" role="list" className="flex flex-wrap gap-1 sm:gap-1.5">
                {stack.map((tool) => (
                  <li key={tool}><Badge variant="outline" className="rounded-md px-1 font-mono text-muted-foreground sm:px-2">{tool}</Badge></li>
                ))}
              </ul>
              <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" /> Indonesia <span>·</span> UTC+8
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="page-frame section-spacing" aria-labelledby="services-title" tabIndex={-1}>
          <ScrollReveal>
            <p className="eyebrow">Services</p>
            <h2 id="services-title" className="section-title mt-2.5">Where I can help.</h2>
          </ScrollReveal>
          <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:gap-4">
            {services.map(({ kind, title, description }) => {
              const Icon = serviceIcons[kind];

              return (
                <ContainerScroll key={kind} className="min-w-0">
                  <Card className="gap-3 py-5 transition-colors hover:border-primary/40 sm:py-6">
                    <CardHeader className="flex flex-col gap-4 px-5 sm:px-6">
                      <span className="grid size-10 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                    </CardHeader>
                    <CardContent className="px-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                      <p>{description}</p>
                    </CardContent>
                  </Card>
                </ContainerScroll>
              );
            })}
          </div>
        </section>

        <section id="work" className="section-spacing border-y border-border bg-card/35" aria-labelledby="work-title" tabIndex={-1}>
          <div className="page-frame">
            <ScrollReveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Case studies</p>
                <h2 id="work-title" className="section-title mt-2.5">Selected work.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Three anonymized examples from application development, device integration, and Linux operations.
              </p>
            </ScrollReveal>
            <div className="mt-7 grid items-start gap-5 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <ContainerScroll key={study.id} className="min-w-0">
                  <CaseStudyCard study={study} />
                </ContainerScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="page-frame section-spacing grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14" aria-labelledby="approach-title" tabIndex={-1}>
          <ScrollReveal>
            <p className="eyebrow">Working together</p>
            <h2 id="approach-title" className="section-title mt-2.5">Focus scope.<br />Clean handoff.</h2>
            <p className="mt-4 max-w-[34ch] leading-relaxed text-muted-foreground">
              I&apos;ve worked in web development & system integration since 2019. I take on small remote
              projects outside my regular working hours.
            </p>
          </ScrollReveal>
          <ol className="approach-list divide-y divide-border border-y border-border" role="list">
            {approach.map(({ title, description }, index) => (
              <li key={title}>
                <ScrollReveal className="approach-step grid gap-x-4 py-4" order={index}>
                  <h3 className="font-semibold tracking-tight">{title}</h3>
                  <p className="col-start-2 mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">{description}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="page-frame pb-8 sm:pb-12" aria-labelledby="contact-title" tabIndex={-1}>
          <ContainerScroll settleAtBottom>
            <Card className="contact-panel items-center gap-6 px-5 py-9 text-center sm:gap-7 sm:px-9 sm:py-12">
              <ScrollReveal>
                <p className="eyebrow">Contact</p>
                <h2 id="contact-title" className="section-title mx-auto mt-2.5 max-w-[22ch] text-balance">
                  What are you trying to get working?
                </h2>
                <p className="mx-auto mt-4 max-w-[51ch] leading-relaxed text-muted-foreground">
                  Send me a short note of the app, what needs to change, and your timeline. We can decide whether it&apos;s a good fit.
                </p>
              </ScrollReveal>
              <a
                className="contact-link inline-flex min-h-11 max-w-full items-center gap-3 rounded-xl border border-input bg-background/55 px-3 py-2.5 text-sm font-medium text-primary sm:px-4 sm:text-base"
                href={`mailto:${profile.email}`}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="select-all" data-nosnippet="">{profile.email}</span>
              </a>
              <nav aria-label="Social profiles" className="flex justify-center gap-3">
                {socialProfiles.map(({ label, href, Icon }) => (
                  <Button key={href} asChild variant="outline" size="icon" className="contact-link size-11 rounded-full text-muted-foreground">
                    <a href={href} aria-label={label}>
                      <Icon className="size-5" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </nav>
            </Card>
          </ContainerScroll>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="page-frame flex flex-wrap items-center justify-between gap-2 py-4 text-sm text-muted-foreground" data-nosnippet="">
          <p>{profile.name} <span className="mx-1">·</span> Indonesia</p>
          <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center rounded underline underline-offset-4 hover:text-primary">
            {profile.email}
          </a>
          <a href="#top" className="inline-flex min-h-11 items-center rounded hover:text-primary">Back to top</a>
        </div>
      </footer>
    </>
  );
}
