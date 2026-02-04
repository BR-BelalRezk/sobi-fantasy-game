"use client";

import IntroAnimationSteps from "@/store/intro-animation-steps";
import Lenis from "./lenis";
import { SpeedQuestionsPhases } from "@/store/speed-questions";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Lenis>
      <IntroAnimationSteps>
        <SpeedQuestionsPhases>{children}</SpeedQuestionsPhases>
      </IntroAnimationSteps>
    </Lenis>
  );
}
