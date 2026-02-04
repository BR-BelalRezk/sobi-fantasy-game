"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { usePhase } from "@/store/speed-questions";

export default function SpeedQuestionScreen() {
  const { speedQuestionPhase, setSpeedQuestionPhase } = usePhase();
  const [showButton, setShowButton] = useState(false);

  const mediaVariants: Variants = {
    initial: { opacity: 0, scale: 1.05, filter: "blur(20px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  };

  const buttonVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  const textVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Welcome Phase */}
        {speedQuestionPhase === "welcome" && (
          <motion.div
            key="welcome-phase"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.video
              src="/videos/welcome.mp4"
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              variants={mediaVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onEnded={() => setShowButton(true)}
            />

            <AnimatePresence>
              {showButton && (
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-10 px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                  onClick={() => {
                    setSpeedQuestionPhase("beforeSpeedQuestion");
                    setShowButton(false);
                  }}
                >
                  Next
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Before Speed Question Phase */}
        {speedQuestionPhase === "beforeSpeedQuestion" && (
          <motion.div
            key="before-speed-phase"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.video
              src="/videos/startSpeedQuestion.mp4"
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              variants={mediaVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onEnded={() => setShowButton(true)}
            />

            <AnimatePresence>
              {showButton && (
                <>
                  <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute bottom-10 px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                    onClick={() => {
                      setSpeedQuestionPhase("startSpeedQuestion");
                      setShowButton(false);
                    }}
                  >
                    Start Speed Question
                  </motion.button>

                  <motion.p
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="absolute bottom-20 text-white text-lg"
                  >
                    Get ready! The speed questions are coming.
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Start Speed Question Phase */}
        {speedQuestionPhase === "startSpeedQuestion" && (
          <motion.div
            key="start-speed-phase"
            className="absolute inset-0 flex items-center justify-center bg-black"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
