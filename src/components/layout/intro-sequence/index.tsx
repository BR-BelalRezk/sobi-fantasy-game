"use client";

import { AnimatePresence } from "motion/react";
import Initialize from "./initialize";
import StartExperience from "./start-experience";
import { useGamePhases } from "@/components/contexts/game-phases";

export default function IntroSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const { phase } = useGamePhases();

  return (
    <AnimatePresence mode="wait">
      {phase === "initialize" && <Initialize key="initialize" />}
      {phase === "start experience" && (
        <StartExperience key="start-experience" />
      )}
      {children}
    </AnimatePresence>
  );
}
