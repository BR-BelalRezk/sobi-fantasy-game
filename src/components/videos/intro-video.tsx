"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { introVideo } from "@/assets";

export default function IntroVideo({
  children,
}: {
  children: React.ReactNode;
}) {
  const [introDone, setIntroDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure autoplay works smoothly
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked, we can show a play button if needed
        });
      }
    }
  }, []);

  const handleVideoEnd = () => {
    setTimeout(() => setIntroDone(true), 100); // Smooth handoff
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait" initial={false}>
        {!introDone ? (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50"
            style={{
              willChange: "opacity, transform, filter",
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 1.15, filter: "blur(30px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Video container with GPU layers */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <video
                ref={videoRef}
                src="/videos/intro.mp4"
                autoPlay
                muted={false}
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
                onEnded={handleVideoEnd}
              />

              {/* Cinematic vignette */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  background: `radial-gradient(
                    ellipse at center,
                    transparent 0%,
                    transparent 40%,
                    rgba(0,0,0,0.3) 70%,
                    rgba(0,0,0,0.6) 100%
                  )`,
                  mixBlendMode: "multiply",
                }}
              />

              {/* Subtle light leak */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: [0, 0.15, 0], x: ["100%", "-100%"] }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="game"
            className="relative w-full h-full"
            style={{
              willChange: "transform, opacity, filter",
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
