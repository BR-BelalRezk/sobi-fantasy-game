import { webSocketExtenstions } from "@/utils";
import { useParams, usePathname } from "next/navigation";
import { createContext, useContext, useRef } from "react";

type WebsocketContextType = {
  ref: React.RefObject<webSocketExtenstions>;
};

const WebsocketContext = createContext<WebsocketContextType | null>(null);

export const useWebSocket = () => {
  const context = useContext(WebsocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketConnection");
  }
  return context;
};

export default function WebSocketConnection({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams<{ id?: string }>();

  const queryParams = () => {
    if (pathname === "/game") {
      return "?role=admin&app_name=c3g";
    }

    if (pathname.startsWith("/game/team")) {
      if (params.id === "a") {
        return "?team_name=team1&app_name=c3g";
      }

      if (params.id === "b") {
        return "?team_name=team2&app_name=c3g";
      }
    }

    return "";
  };

  const url = `ws://localhost:3100${queryParams()}`;

  const ref = useRef(new webSocketExtenstions(url));

  ref.current.onmessage = (data: { event: string }) => {
    console.log(data);
  };

  return (
    <WebsocketContext.Provider value={{ ref }}>
      {children}
    </WebsocketContext.Provider>
  );
}

// onClick = {()=>{send({event:"start_experience"})}}
