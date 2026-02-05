"use client";

import { AnimatePresence } from "motion/react";
import { useGamePhases } from "@/components/contexts/game-phases";
import Welcome from "@/components/screens/admin/welcome";

export default function Admin() {
  const { phase } = useGamePhases();
  return (
    <AnimatePresence mode="wait">
      {phase === "welcome" && <Welcome />}
    </AnimatePresence>
  );
}
