"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isHovered, setHovered] = useState(false);

  const handleClick = () => {
    console.log("Elemento clicado!");
  };
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/beiramar.png"
        layout="fill"
        objectFit="cover"
        alt="Imagem de fundo"
      />
      <div className="absolute inset-0 flex justify-center items-center justify-">
        <div className="flex flex-col justify-cente items-center">
          <div>
            <Image
              src="/image340.svg"
              alt="Next.js Logo"
              width={350}
              height={350}
              priority
            />
          </div>
          <div
            className="pt-16 font-light text-lg"
            style={{ letterSpacing: "0.1em" }}
          >
            START EXPERIENCE
          </div>
          <div className="mt-4">
            <Link href="/registro">
              <div className="rounded-full bg-black bg-opacity-25 p-4 border-white transition-all duration-300 ease-in-out hover:scale-105">
                <MoveRight className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
