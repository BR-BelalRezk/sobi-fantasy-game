import GamePhases from "./game-phases";

export default function Contexts({ children }: { children: React.ReactNode }) {
  return <GamePhases>{children}</GamePhases>;
}
