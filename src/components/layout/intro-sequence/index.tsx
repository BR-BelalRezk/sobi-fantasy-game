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

  // Map each phase to a unique component
  const renderPhase = () => {
    switch (phase) {
      case "initialize":
        return <Initialize key="initialize" />;
      case "start experience":
        return <StartExperience key="start-experience" />;
      default:
        // For all other phases, render the children
        return (
          <motion.div
            key={phase} // KEY by phase so AnimatePresence triggers exit/enter
            initial={{ opacity: 0, scale: 0.98, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        );
    }
  };

  return <AnimatePresence mode="wait">{renderPhase()}</AnimatePresence>;
}
