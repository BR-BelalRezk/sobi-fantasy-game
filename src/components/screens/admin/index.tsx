"use client";

import { AnimatePresence, motion } from "motion/react";
import { useGamePhases } from "@/components/contexts/game-phases";
import Welcome from "@/components/screens/admin/welcome";
import BeforeSpeedQuestion from "./before-speed-question";
import SpeedQuestion from "./speed-question";

export default function Admin() {
  const { phase } = useGamePhases();

  return (
    <div className="w-full h-screen bg-black">
      <AnimatePresence mode="wait">
        {phase === "welcome" && <Welcome key="welcome" />}
        {phase === "beforeSpeedQuestion" && (
          <BeforeSpeedQuestion key="beforeSpeedQuestion" />
        )}
        {phase === "startSpeedQuestion" && (
          <motion.div
            key="startSpeedQuestion"
            className="w-full h-screen bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <SpeedQuestion />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
