"use client";

import { AnimatePresence } from "motion/react";
import { useGamePhases } from "@/components/contexts/game-phases";
import Welcome from "@/components/screens/admin/welcome";
import BeforeSpeedQuestion from "./before-speed-question";

export default function Admin() {
  const { phase } = useGamePhases();
  return (
    <>
      {phase === "welcome" && <Welcome />}
      {phase === "beforeSpeedQuestion" && <BeforeSpeedQuestion />}
    </>
  );
}
