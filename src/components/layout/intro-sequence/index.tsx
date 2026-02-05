"use client";

import { AnimatePresence, motion } from "motion/react";
import Initialize from "./initialize";
import StartExperience from "./start-experience";
import { useGamePhases } from "@/components/contexts/game-phases";

export default function IntroSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const { phase } = useGamePhases();

  // 1. Define which phases are considered "Intro" phases
  const isIntroPhase = phase === "initialize" || phase === "start experience";

  return (
    <AnimatePresence mode="wait">
      {phase === "initialize" && <Initialize key="initialize" />}

      {phase === "start experience" && (
        <StartExperience key="start-experience" />
      )}

      {/* 2. Only render children when NOT in intro phase */}
      {!isIntroPhase && (
        <motion.div
          key="main-app" // 3. A unique key is required for AnimatePresence
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full" // Ensure it takes space
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
