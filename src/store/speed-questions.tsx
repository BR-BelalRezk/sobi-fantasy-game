"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Phase = "welcome" | "beforeSpeedQuestion" | "startSpeedQuestion";

interface PhaseContextType {
  speedQuestionPhase: Phase;
  setSpeedQuestionPhase: (speedQuestionPhase: Phase) => void;
}

const PhaseContext = createContext<PhaseContextType | undefined>(undefined);

export function SpeedQuestionsPhases({ children }: { children: ReactNode }) {
  const [speedQuestionPhase, setSpeedQuestionPhase] =
    useState<Phase>("welcome");

  return (
    <PhaseContext.Provider
      value={{ speedQuestionPhase, setSpeedQuestionPhase }}
    >
      {children}
    </PhaseContext.Provider>
  );
}

export function usePhase() {
  const context = useContext(PhaseContext);
  if (!context) throw new Error("usePhase must be used within a PhaseProvider");
  return context;
}
