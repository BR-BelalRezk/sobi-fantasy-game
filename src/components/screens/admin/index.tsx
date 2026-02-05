"use client";

import { AnimatePresence, motion } from "motion/react";
import { useGamePhases } from "@/components/contexts/game-phases";
import Welcome from "@/components/screens/admin/welcome";
import BeforeSpeedQuestion from "./before-speed-question";

export default function Admin() {
  const { phase } = useGamePhases();
  return (
    <motion.div>
      <AnimatePresence mode="wait">
        {phase === "welcome" && <Welcome />}
        {phase === "beforeSpeedQuestion" && <BeforeSpeedQuestion />}
        {phase === "startSpeedQuestion" && (
          <p className="text-white text-center">startSpeedQuestion</p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
