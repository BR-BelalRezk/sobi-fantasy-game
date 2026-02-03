import IntroVideo from "@/components/videos/intro-video";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <IntroVideo>{children}</IntroVideo>;
}
