import { createContext, useContext, useState } from "react";

type Phases =
  | "initialize"
  | "start experience"
  | "welcome"
  | "beforeSpeedQuestion"
  | "startSpeedQuestion";

interface GamePhasesContextType {
  phase: Phases;
  setPhase: React.Dispatch<React.SetStateAction<Phases>>;
}

const GamePhasesContext = createContext<GamePhasesContextType | null>(null);

export const useGamePhases = () => {
  const context = useContext(GamePhasesContext);
  if (!context) {
    throw new Error("useGamePhases must be used within a GamePhasesProvider");
  }
  return context;
};

export default function GamePhases({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<Phases>("initialize");
  return (
    <GamePhasesContext.Provider value={{ phase, setPhase }}>
      {children}
    </GamePhasesContext.Provider>
  );
}
