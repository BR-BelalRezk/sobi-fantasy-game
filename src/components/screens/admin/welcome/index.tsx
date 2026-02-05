"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useGamePhases } from "@/components/contexts/game-phases";
import GameButton from "@/components/shared/game-button";

export default function Welcome() {
  const { setPhase } = useGamePhases();
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <motion.section
      key="welcome-phase"
      className="w-full h-screen bg-black relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.video
        key="welcome-video"
        src="/videos/welcome.mp4"
        className="w-full h-full object-cover"
        autoPlay
        playsInline
        preload="auto"
        initial={{ opacity: 0, scale: 1.05, filter: "blur(16px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        onEnded={() => setVideoEnded(true)}
      />

      <AnimatePresence mode="wait">
        {videoEnded && (
          <GameButton
            text="Start"
            onClick={() => setPhase("beforeSpeedQuestion")}
            className="absolute bottom-10 w-full flex flex-col items-center gap-4"
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
