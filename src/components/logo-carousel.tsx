"use client";
import React from "react";
import Image from "next/image";

// Configuração dos logos das instituições parceiras
const partnerLogos = [
  { id: 1, name: "Governo Federal", src: "/GovernoFederal.jpg" },
  { id: 2, name: "Governo do Estado do Rio de Janeiro", src: "/GovernoRJ.jpg" },
  { id: 3, name: "UNICEF", src: "/unicef-logo.png" },
  { id: 4, name: "Prefeitura do Rio de Janeiro", src: "/PrefeituraRO.jpg" },
  { id: 5, name: "EGIDE", src: "/egide.jpeg" },
];

// Duplica os logos para criar um loop infinito suave
const logos1 = [...partnerLogos];
const logos2 = [...partnerLogos].reverse();

function Marquee({
  logos,
  direction = "forwards",
}: {
  logos: typeof logos1;
  direction?: string;
}) {
  const numItems = logos.length;
  const speed = "30s";
  const itemWidth = "200px";
  const itemGap = "24px";

  return (
    <div
      className="max-w-full overflow-hidden"
      style={
        {
          "--speed": speed,
          "--numItems": numItems,
          "--item-width": itemWidth,
          "--item-gap": itemGap,
          "--direction": direction,
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="w-max flex"
        style={
          {
            "--track-width": `calc(var(--item-width) * ${numItems})`,
            "--track-gap": `calc(var(--item-gap) * ${numItems})`,
          } as React.CSSProperties
        }
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 flex justify-center items-center"
            style={
              {
                width: "var(--item-width)",
                height: "100px",
                marginRight: "var(--item-gap)",
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
              } as React.CSSProperties
            }
          >
            <div className="relative w-full h-full p-4">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain  hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  // Inject keyframes animation into the document's head
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="items-center overflow-hidden py-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-y-6">
        <Marquee logos={logos1} />
        <Marquee logos={logos2} direction="reverse" />
      </div>
    </div>
  );
}
