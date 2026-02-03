"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface VideoSceneProps {
  src: string;
  onEnd: () => void;
}

export function VideoScene({ src, onEnd }: VideoSceneProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);
  const [userUnmuted, setUserUnmuted] = useState(false);

  // Autoplay muted when ready
  useEffect(() => {
    if (!ready) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true; // autoplay muted to satisfy browser
    video.play().catch(() => onEnd()); // if blocked, skip safely
  }, [ready, onEnd]);

  // Add click listener to unmute
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
    <motion.div
      className="fixed inset-0 z-20 cursor-pointer"
      initial={{ opacity: 0, scale: 1.06, filter: "blur(16px)" }}
      animate={ready ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
      exit={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {!ready && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black">
          <div className="w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        preload="auto"
        playsInline
        muted
        className="w-full h-full object-cover"
        onLoadedData={() => setReady(true)}
        onEnded={onEnd}
        onError={onEnd}
      />
    </motion.div>
  );
}
