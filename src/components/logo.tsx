import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className = "",
  width = 40,
  height = 40,
}: LogoProps) {
  return (
    <Image
      src="/logoSemFundo.png"
      alt="Fundação Joanna"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
