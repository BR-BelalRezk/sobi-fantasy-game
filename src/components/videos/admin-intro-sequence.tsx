"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { VideoScene } from "../shared/video-scene";

type Step = "welcome" | "preparing" | "done";

interface AdminIntroSequenceProps {
  onFinish?: () => void;
}
export default function AdminIntroSequence({
  onFinish,
}: AdminIntroSequenceProps) {
  const [step, setStep] = useState<Step>("welcome");

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <VideoScene
            key="welcome"
            src="/videos/welcome.mp4"
            onEnd={() => setStep("preparing")}
          />
        )}
        {step === "preparing" && (
          <VideoScene
            key="preparing"
            src="/videos/startSpeedQuestions.mp4"
            onEnd={() => {
              setStep("done");
              onFinish?.();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
