import { motion } from "motion/react";

type props = {
  text: string;
  onClick: () => void;
};

export default function GameButton({ text, onClick }: props) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      onClick={onClick}
      className="relative px-20 py-5 rounded-full bg-linear-to-b from-amber-400 via-yellow-500 to-orange-500 text-gray-900 font-bold text-3xl tracking-wide shadow-[0_8px_30px_rgba(251,191,36,0.5)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.7)] transition-shadow duration-300 group"
    >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />

      {/* Button text */}
      <span className="relative z-10 drop-shadow-sm">{text}</span>

      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-full bg-linear-to-t from-orange-600/20 to-transparent" />
    </motion.button>
  );
}
