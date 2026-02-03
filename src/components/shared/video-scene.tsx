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

  useEffect(() => {
    if (!ready) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    requestAnimationFrame(() => {
      video.play().catch(() => {
        // autoplay blocked → skip safely
        onEnd();
      });
    });
  }, [ready, onEnd]);

  return (
    <motion.div
      className="fixed inset-0 z-20"
      initial={{
        opacity: 0,
        scale: 1.06,
        filter: "blur(16px)",
      }}
      animate={
        ready
          ? {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      exit={{
        opacity: 0,
        scale: 0.94,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
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
        muted={false}
        className="w-full h-full object-cover"
        onLoadedData={() => setReady(true)}
        onEnded={onEnd}
        onError={onEnd}
      />
    </motion.div>
  );
}
