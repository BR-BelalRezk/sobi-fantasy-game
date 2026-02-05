"use client";

import { AnimatePresence } from "motion/react";
import Initialize from "./initialize";
import { useGamePhases } from "@/components/contexts/game-phases";
import StartExperience from "./start-experience";

export default function IntroSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const { phase } = useGamePhases();
  const showChildren = phase !== "initialize" && phase !== "start experience";

  return (
    <AnimatePresence mode="wait">
      {phase === "initialize" && <Initialize />}
      {phase === "start experience" && <StartExperience />}
      {showChildren && children}
    </AnimatePresence>
  );
}
