"use client";

import { AnimatePresence, motion } from "motion/react";
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
      {showChildren && (
        <motion.div
          key="children-phase"
          initial={{ opacity: 0, scale: 0.98, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
