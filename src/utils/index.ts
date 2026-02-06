import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class webSocketExtenstions extends WebSocket {
  constructor(url: string) {
    super(url);
  }
  send(data: any) {
    super.send(JSON.stringify(data));
  }
  onmessage = (data: any) => {
    JSON.parse(data.data);
  };
}
