"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type NavLink = { label: string; href: string };

function DesktopNav({ links }: { links: NavLink[] }) {
  const [hovered, setHovered] = useState<string>();
  const reduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-1 md:flex"
      onPointerLeave={() => setHovered(undefined)}
    >
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          onPointerEnter={() => setHovered(href)}
          className="relative inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:text-foreground"
        >
          {hovered === href && (
            <motion.span
              aria-hidden="true"
              layoutId={reduceMotion ? undefined : "nav-highlight"}
              className="absolute inset-0 rounded-full bg-accent"
            />
          )}
          <span className="relative">{label}</span>
        </a>
      ))}
    </nav>
  );
}

function MobileNav({ links }: { links: NavLink[] }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOnOutsidePress(event: PointerEvent) {
      if (menu.current?.open && event.target instanceof Node && !menu.current.contains(event.target)) {
        menu.current.open = false;
      }
    }

    window.addEventListener("pointerdown", closeOnOutsidePress);
    return () => window.removeEventListener("pointerdown", closeOnOutsidePress);
  }, []);

  return (
    <details
      ref={menu}
      className="group justify-self-end md:hidden"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !event.currentTarget.open) return;
        event.currentTarget.open = false;
        toggle.current?.focus();
      }}
    >
      <summary
        ref={toggle}
        aria-label="Navigation menu"
        className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-border bg-background/75 text-foreground hover:border-primary/55 [&::-webkit-details-marker]:hidden"
      >
        <IconMenu2 aria-hidden="true" className="size-5 group-open:hidden" />
        <IconX aria-hidden="true" className="hidden size-5 group-open:block" />
      </summary>
      <nav
        aria-label="Main navigation"
        className="mobile-nav-menu absolute inset-x-0 top-full mt-2 grid max-h-[calc(100svh-var(--site-header-height)-2rem)] gap-1 overflow-y-auto rounded-2xl border border-border bg-card p-2 shadow-xl shadow-black/40"
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:bg-accent focus-visible:text-foreground"
            onClick={() => {
              if (menu.current) menu.current.open = false;
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
}

// Adapted from Aceternity UI's Resizable Navbar.
export function ResizableNavbar({
  logo,
  links,
  desktopActions,
}: {
  logo: ReactNode;
  links: NavLink[];
  desktopActions: ReactNode;
}) {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  useMotionValueEvent(scrollY, "change", (position) => setCompact(position > 100));

  return (
    <header className="site-header sticky top-0 z-10" data-compact={compact}>
      <div className="page-frame">
        <div className="site-nav-shell relative mx-auto grid grid-cols-[1fr_auto] items-center gap-x-2 md:grid-cols-[1fr_auto_1fr]">
          {logo}
          <DesktopNav links={links} />
          {desktopActions}
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
