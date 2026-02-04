"use client";

import { useIntroAnimationSteps } from "@/store/intro-animation-steps";
import Image from "next/image";
import sobiFanstasyGameLogo from "@/assets/images/Sobi-Fantasy-Game-Logo.webp";
import { motion } from "motion/react";

export default function Logo() {
  const { introStep } = useIntroAnimationSteps();
  const canAppear = introStep >= 3;

  return (
    <header className="fixed top-0 right-0 z-9999">
      <motion.figure
        initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
        animate={
          canAppear
            ? { opacity: 1, filter: "blur(0px)", scale: 1 }
            : { opacity: 0, filter: "blur(20px)", scale: 0.8 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        className="size-[200px]"
      >
        <Image
          src={sobiFanstasyGameLogo}
          alt="Sobi Fantasy Game Logo"
          className="size-full object-cover"
          priority
        />
      </motion.figure>
    </header>
  );
}
