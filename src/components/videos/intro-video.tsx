"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { introVideo } from "@/assets";

export default function IntroVideo({
  children,
}: {
  children: React.ReactNode;
}) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {!introDone ? (
          /* 🎬 INTRO */
          <motion.div
            key="intro"
            className="fixed inset-0 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <video
              src={introVideo}
              autoPlay
              muted={false}
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => setIntroDone(true)}
            />
          </motion.div>
        ) : (
          /* 🎮 GAME UI */
          <motion.div
            key="game"
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
