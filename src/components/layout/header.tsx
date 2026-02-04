"use client";
import { useIntroAnimationSteps } from "@/store/intro-animation-steps";
import AudioButton from "./audio-button";
import Logo from "./logo";
import { motion } from "motion/react";

export default function Header() {
  const { introStep } = useIntroAnimationSteps();
  const canAppear = introStep >= 3;
  return (
    <header className="fixed top-0 right-0 z-9999">
      <motion.div
        className="flex flex-col gap-20"
        initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
        animate={
          canAppear
            ? { opacity: 1, filter: "blur(0px)", scale: 1 }
            : { opacity: 0, filter: "blur(20px)", scale: 0.8 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Logo />
        <AudioButton />
      </motion.div>
    </header>
  );
}
