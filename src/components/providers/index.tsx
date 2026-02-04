"use client";

import IntroAnimationSteps from "@/store/intro-animation-steps";
import Lenis from "./lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Lenis>
      <IntroAnimationSteps>{children}</IntroAnimationSteps>
    </Lenis>
  );
}
