"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface IntroVideoProps {
  children: React.ReactNode;
  videoSrc?: string;
}

type Phase = "loading" | "playing" | "done";

export default function IntroVideo({
  children,
  videoSrc = "/videos/intro.mp4",
}: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [phase, setPhase] = useState<Phase>("loading");
  const [userUnmuted, setUserUnmuted] = useState(false);

  /**
   * Start playback muted after first paint
   */
  useEffect(() => {
    if (phase !== "loading") return;

    const start = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = true; // muted to satisfy autoplay policies

      video
        .play()
        .then(() => setPhase("playing"))
        .catch(() => setPhase("done")); // autoplay blocked → skip intro
    };

    requestAnimationFrame(start);
  }, [phase]);

  /**
   * Click anywhere to unmute
   */
  useEffect(() => {
    if (userUnmuted) return;

    const handleClick = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = false;
      setUserUnmuted(true);
    };

    document.addEventListener("click", handleClick, { once: true });
    return () => document.removeEventListener("click", handleClick);
  }, [userUnmuted]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black cursor-pointer">
      {/* 🌀 LOADER */}
      {phase === "loading" && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4 text-white/70">
            <div className="w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            <span className="text-xs tracking-widest uppercase">
              Loading experience
            </span>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {phase !== "done" && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50"
            initial={{ opacity: 0, scale: 1.08, filter: "blur(18px)" }}
            animate={
              phase === "playing"
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : {}
            }
            exit={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              preload="auto"
              playsInline
              muted
              className="w-full h-full object-cover"
              onEnded={() => setPhase("done")}
              onError={() => setPhase("done")}
            />
          </motion.div>
        )}
        {phase === "done" && (
          <motion.div
            key="content"
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
