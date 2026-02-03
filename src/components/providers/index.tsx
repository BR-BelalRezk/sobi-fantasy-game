"use client";

import Lenis from "./lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Lenis>{children}</Lenis>;
}
