"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { usePhase } from "@/store/speed-questions";
import GameButton from "@/components/shared/game-button";

export default function SpeedQuestionScreen() {
  const { speedQuestionPhase, setSpeedQuestionPhase } = usePhase();
  const [showButton, setShowButton] = useState(false);

  // Reset button state whenever the phase changes
  useEffect(() => {
    setShowButton(false);
  }, [speedQuestionPhase]);

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const mediaVariants: Variants = {
    initial: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1 },
    },
    exit: {
      opacity: 0,
      scale: 1,
      filter: "blur(5px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {/* === Welcome Phase === */}
        {speedQuestionPhase === "welcome" && (
          <motion.div
            key="welcome-phase"
            className="absolute inset-0 w-full h-full"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Background Video */}
            <motion.video
              src="/videos/welcome.mp4"
              playsInline
              autoPlay
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0"
              variants={mediaVariants}
              onEnded={() => setShowButton(true)}
            />

            {/* UI Overlay (Handles positioning) */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-20 pointer-events-none">
              <AnimatePresence>
                {showButton && (
                  <div className="pointer-events-auto">
                    <GameButton
                      text="Next"
                      onClick={() =>
                        setSpeedQuestionPhase("beforeSpeedQuestion")
                      }
                    />
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* === Before Speed Question Phase === */}
        {speedQuestionPhase === "beforeSpeedQuestion" && (
          <motion.div
            key="before-speed-phase"
            className="absolute inset-0 w-full h-full"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.video
              src="/videos/startSpeedQuestions.mp4"
              playsInline
              autoPlay
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0"
              variants={mediaVariants}
              onEnded={() => setShowButton(true)}
            />

            {/* UI Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-20 pointer-events-none gap-8">
              <AnimatePresence>
                {showButton && (
                  <>
                    {/* Text Container */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-white text-lg font-medium drop-shadow-md"
                    >
                      Get ready for the Speed Question.
                    </motion.p>

                    {/* Button Container */}
                    <div className="pointer-events-auto">
                      <GameButton
                        text="Start Speed Question"
                        onClick={() =>
                          setSpeedQuestionPhase("startSpeedQuestion")
                        }
                      />
                    </div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* === Start Speed Question Phase === */}
        {speedQuestionPhase === "startSpeedQuestion" && (
          <motion.div
            key="start-speed-phase"
            className="absolute inset-0 flex items-center justify-center bg-black z-20"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-3xl font-bold text-white"
            >
              Speed Question Phase Started!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
