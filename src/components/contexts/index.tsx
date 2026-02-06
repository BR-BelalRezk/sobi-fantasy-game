import GamePhases from "./game-phases";
import WebSocketConnection from "./websocket";

export default function Contexts({ children }: { children: React.ReactNode }) {
  return (
    <WebSocketConnection>
      <GamePhases>{children}</GamePhases>
    </WebSocketConnection>
  );
}
