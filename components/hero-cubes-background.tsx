"use client";

import { motion, useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";
import { useRef, useSyncExternalStore } from "react";

const BackgroundCubesGrid = dynamic(
  () => import("@/components/ui/background-cubes-grid").then((module) => module.BackgroundCubesGrid),
  { ssr: false },
);

const interactiveGridQuery = "(prefers-reduced-motion: no-preference)";

function subscribeToGridPreference(onChange: () => void) {
  const media = window.matchMedia(interactiveGridQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function canAnimateGrid() {
  return window.matchMedia(interactiveGridQuery).matches;
}

export function HeroCubesBackground() {
  const animate = useSyncExternalStore(subscribeToGridPreference, canAnimateGrid, () => false);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <div ref={container} className="hero-cubes" aria-hidden="true">
      <motion.div className="hero-cubes-field motion-reduce:transform-none!" style={{ y }}>
        {animate && (
          <BackgroundCubesGrid
            cellSize={110}
            gap={0.035}
            topColor="#1b2c42"
            leftColor="#0d1828"
            rightColor="#132239"
            glowColor="#79aaff"
            glow={0.54}
          />
        )}
      </motion.div>
    </div>
  );
}
