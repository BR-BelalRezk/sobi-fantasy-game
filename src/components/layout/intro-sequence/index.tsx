"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";
import { cn } from "@/utils";

import sobiLogo from "@/assets/images/Sobi-Logo.webp";
import sobiFantasyGameLogo from "@/assets/images/Sobi-Fantasy-Game-Logo.webp";
import { useIntroAnimationSteps } from "@/store/intro-animation-steps";

type Props = {
  children: React.ReactNode;
};

const mediaVariants: Variants = {
  initial: { opacity: 0, scale: 1.25, filter: "blur(20px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
};

const childrenVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function IntroSequence({ children }: Props) {
  const { introStep, setIntroStep } = useIntroAnimationSteps();

  const animationDuration = 1.8;

  return (
    <section className="w-full h-screen overflow-clip relative">
      <div
        className={cn(
          "size-full flex items-center justify-center transition-colors duration-1800 ease-in-out",
          introStep % 2 === 1 ? "bg-white" : "bg-black",
        )}
      >
        <AnimatePresence mode="wait">
          {/* Step 1: First Image */}
          {introStep === 1 && (
            <motion.figure
              key="sobi-logo"
              variants={mediaVariants}
              initial={{
                opacity: 0,
                scale: 1.25,
                filter: "blur(20px)",
                transition: { delay: 5 },
              }}
              animate="animate"
              exit="exit"
              transition={{
                duration: animationDuration,
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={() => setIntroStep(2)}
            >
              <Image
                src={sobiLogo}
                alt="Sobi Logo"
                className="size-full object-cover"
                priority
              />
            </motion.figure>
          )}

          {/* Step 2: Second Image */}
          {introStep === 2 && (
            <motion.figure
              key="fantasy-logo"
              variants={mediaVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: animationDuration,
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={() => setIntroStep(3)}
            >
              <Image
                src={sobiFantasyGameLogo}
                alt="Sobi Fantasy Game Logo"
                className="size-full object-cover"
                priority
              />
            </motion.figure>
          )}

          {/* Step 3: Video */}
          {introStep === 3 && (
            <motion.figure
              key="intro-video"
              variants={mediaVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: animationDuration,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full"
            >
              <video
                src="/videos/intro.mp4"
                className="w-full h-full object-cover"
                playsInline
                autoPlay
                muted // keep muted so autoplay works
                preload="auto"
                onEnded={() => setIntroStep(4)}
              />
            </motion.figure>
          )}

          {/* Step 4: Children */}
          {introStep === 4 && (
            <motion.div
              key="children"
              variants={childrenVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
