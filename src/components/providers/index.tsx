"use client";

import Contexts from "../contexts";
import Lenis from "./lenis";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Lenis>
      <Contexts>{children}</Contexts>
    </Lenis>
  );
}
