import { useState } from "react";
import { motion, Variants } from "motion/react";

export default function AudioButton() {
  const [active, setActive] = useState(false);

  const toggleAudio = () => {
    setActive((prev) => !prev);

    // Unmute all videos in the DOM
    const videos = document.querySelectorAll<HTMLVideoElement>("video");
    videos.forEach((v) => {
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {});
    });
  };

  const barVariants: Variants = {
    animate: {
      height: ["4px", "16px", "4px"], // keyframes
      y: ["0px", "-4px", "0px"],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    initial: { height: "4px", y: "0px" },
  };

  return (
    <button
      onClick={toggleAudio}
      className="z-9999 flex items-center space-x-1 p-2 bg-black/20 rounded-md backdrop-blur-sm hover:bg-black/40 transition"
      aria-label="Unmute Video"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          variants={barVariants}
          animate={active ? "animate" : "initial"}
          style={{
            width: 2,
            borderRadius: 2,
            backgroundColor: "white",
            display: "inline-block",
          }}
          transition={{ delay: i * 0.1 }} // stagger effect
        />
      ))}
    </button>
  );
}
