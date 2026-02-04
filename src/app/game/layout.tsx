import IntroSequence from "@/components/shared/intro-sequence";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <IntroSequence>{children}</IntroSequence>;
}
