import { motion } from "motion/react";
import { cn } from "@/utils"; // Assuming you have a cn utility, if not, remove this and standard template literals

type Props = {
  text: string;
  onClick: () => void;
  className?: string; // Added to allow parent to style margin/position if needed
};

export default function GameButton({ text, onClick, className }: Props) {
  return (
    <motion.button
      layout // Helps with smooth layout changes
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 20, filter: "blur(5px)" }} // Reduced exit movement for smoother feel
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      onClick={onClick}
      className={cn(
        "px-20 py-5 rounded-full bg-linear-to-b from-amber-400 via-yellow-500 to-orange-500 text-gray-900 font-bold text-3xl tracking-wide shadow-[0_8px_30px_rgba(251,191,36,0.5)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.7)] transition-shadow duration-300",
        className,
      )}
    >
      <span className="relative z-10 drop-shadow-sm">{text}</span>
    </motion.button>
  );
}
