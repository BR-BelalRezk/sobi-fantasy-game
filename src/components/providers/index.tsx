"use client";

import { AnimatePresence } from "motion/react";
import Contexts from "../contexts";
import Lenis from "./lenis";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Lenis>
      <Contexts>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </Contexts>
    </Lenis>
  );
}
