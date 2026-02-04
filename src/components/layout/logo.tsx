import Image from "next/image";
import sobiFanstasyGameLogo from "@/assets/images/Sobi-Fantasy-Game-Logo.webp";

export default function Logo() {
  return (
    <figure className="size-[200px]">
      <Image
        src={sobiFanstasyGameLogo}
        alt="Sobi Fantasy Game Logo"
        className="size-full object-cover"
        priority
      />
    </figure>
  );
}
