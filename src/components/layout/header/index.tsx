"use client";
import { useIntroAnimationSteps } from "@/store/intro-animation-steps";
import AudioButton from "./audio-button";
import { motion } from "motion/react";

export default function Header() {
  const { introStep } = useIntroAnimationSteps();
  const canAppear = introStep >= 3;
  return (
    <header className="fixed top-20 right-20 z-9999">
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
        animate={
          canAppear
            ? { opacity: 1, filter: "blur(0px)", scale: 1 }
            : { opacity: 0, filter: "blur(20px)", scale: 0.8 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <AudioButton />
      </motion.div>
    </header>
  );
}
