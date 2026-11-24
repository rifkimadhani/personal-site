"use client";

import { clamp } from "motion";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const scrollSpring = { stiffness: 190, damping: 30, skipInitialAnimation: true };
const tiltSpring = { stiffness: 260, damping: 28 };

export function ScrollReveal({
  children,
  className,
  order = 0,
}: {
  children: ReactNode;
  className?: string;
  order?: number;
}) {
  const target = useRef<HTMLDivElement>(null);
  const delay = order * 4;
  const { scrollYProgress } = useScroll({
    target,
    offset: [`start ${98 - delay}%`, `start ${72 - delay}%`],
  });
  const progress = useSpring(scrollYProgress, scrollSpring);
  const y = useTransform(progress, [0, 1], [24, 0]);
  const opacity = useTransform(progress, [0, 1], [0.42, 1]);

  return (
    <div ref={target}>
      <motion.div className={cn("scroll-reveal", className)} style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

// Adapted from Aceternity UI's Container Scroll Animation.
export function ContainerScroll({
  children,
  className,
  settleAtBottom = false,
}: {
  children: ReactNode;
  className?: string;
  settleAtBottom?: boolean;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 98%", settleAtBottom ? "end 98%" : "start 65%"],
  });
  const progress = useSpring(scrollYProgress, scrollSpring);
  const rotateX = useTransform(progress, [0, 1], [20, 0]);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);

  return (
    <div ref={container} className={cn("grid perspective-[1000px] perspective-origin-bottom", className)}>
      <motion.div className="scroll-panel grid origin-bottom" style={{ rotateX, scale }}>
        {children}
      </motion.div>
    </div>
  );
}

export function TiltSurface({ children, strength = 8 }: { children: ReactNode; strength?: number }) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, tiltSpring);
  const rotateY = useSpring(0, tiltSpring);

  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = clamp(-1, 1, ((event.clientX - left) / width) * 2 - 1);
    const y = clamp(-1, 1, ((event.clientY - top) / height) * 2 - 1);
    rotateX.set(-y * strength);
    rotateY.set(x * strength);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div className="tilt-area" onPointerMove={tilt} onPointerLeave={reset} onPointerCancel={reset}>
      <motion.div className="tilt-surface motion-reduce:transform-none!" style={{ rotateX, rotateY }}>
        {children}
      </motion.div>
    </div>
  );
}

export function StackParallax({ children }: { children: ReactNode }) {
  const scene = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, scrollSpring);
  const gridY = useTransform(progress, [0, 1], [-72, 72]);
  const stackY = useTransform(progress, [0, 1], [24, -26]);

  return (
    <div ref={scene} className="mx-auto w-full max-w-[29rem] lg:mr-0">
      <TiltSurface strength={10}>
        <div className="stack-scene grid place-items-center rounded-2xl border border-border px-3 py-4 lg:px-6 lg:py-8">
          <div className="stack-grid-clip" aria-hidden="true">
            <motion.div
              data-parallax="grid"
              className="stack-grid motion-reduce:transform-none!"
              style={{ y: gridY }}
            />
          </div>
          <motion.div
            data-parallax="stack"
            className="tilt-surface relative w-full max-w-sm motion-reduce:transform-none!"
            style={{ y: stackY }}
          >
            <div className="tilt-depth">{children}</div>
          </motion.div>
        </div>
      </TiltSurface>
    </div>
  );
}

export function ProjectParallax({ project, children }: { project: string; children: ReactNode }) {
  const figure = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: figure,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, scrollSpring);
  const y = useTransform(progress, [0, 1], [-20, 20]);

  return (
    <div ref={figure} className="project-figure" data-project={project} aria-hidden="true">
      <motion.div
        data-parallax="project"
        className="tilt-surface w-full max-w-[23rem] motion-reduce:transform-none!"
        style={{ y }}
      >
        <div className="project-flow tilt-depth">{children}</div>
      </motion.div>
    </div>
  );
}
