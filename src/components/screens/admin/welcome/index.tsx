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
      className="w-full h-screen bg-black relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Fullscreen video */}
      <motion.video
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

      {/* Button appears after video */}
      <AnimatePresence mode="wait">
        {videoEnded && (
          <motion.div
            key="welcome-button"
            className="absolute bottom-16 w-full flex justify-center"
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <GameButton
              text="Start"
              onClick={() => setPhase("beforeSpeedQuestion")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
