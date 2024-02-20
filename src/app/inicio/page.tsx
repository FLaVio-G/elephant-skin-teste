"use client";
import { MoveRight, Plus, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Mail,
  Bell,
  Settings,
  FileText,
  MessageSquare,
  Phone,
} from "lucide-react";

export default function Inicio() {
  const [clickedItem, setClickedItem] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedItem(index);
  };

  const isItemClicked = (index: number) => {
    return clickedItem === index;
  };

  return (
    <div
      className="flex flex-row w-full h-screen bg-cover"
      style={{ backgroundImage: "url('/images/beiramar.png')" }}
    >
      {/* Side Bar */}
      <div className="flex flex-col h-full items-center justify-center w-24 bg-red-400  text-white p-4">
        <div className="flex flex-col items-center gap-4 justify-center flex-grow">
          <Home size={24} />
          <div className="border-r border-dashed h-8 "></div>
          <Mail size={24} />
          <div className="border-r border-dashed h-8 "></div>
          <Bell size={24} />
          <div className="border-r border-dashed h-8 "></div>
          <Settings size={24} />
          <div className="border-r border-dashed h-8 "></div>
          <FileText size={24} />
          <div className="border-r border-dashed h-8 "></div>
          <User size={24} />
        </div>

        <div className="mt-auto">
          <MessageSquare size={24} className="my-2" />
          <Phone size={24} className="mt-10" />
        </div>
      </div>
      <div className="flex flex-col h-full items-center justify-center w-24  text-white p-4">
        <div className="flex flex-col items-center gap-4 justify-center flex-grow">
          <Plus size={24} />
        </div>
      </div>

      {/* Conteúdo Central */}
      <div className="flex flex-col bg-red-500  h-full content-between justify-center w-full text-white p-4">
        <div className="min-h-96 bg-yellow-300 flex flex-col justify-end">
          <div
            className="flex flex-col justify-normal items-center text-center pt-16 font-light text-lg"
            style={{ letterSpacing: "0.1em" }}
          >
            <h2 className="text-5xl">Innovation in Your Hands</h2>
            <h4 className="mt-5 max-w-[596px] h-16 text-lg">
              Explore, Interact and Transform the Real Estate Market with Our
              Smart Interactive Table.
            </h4>
          </div>
        </div>
        <div className="flex mt-56 bg-blue-400 flex-col items-center justify-center">
          <p className="text-2xl font-thin"> START EXPERIENCE</p>
          <Link href="/registro">
            <div className="rounded-full bg-black bg-opacity-25 p-4 border-white transition-all duration-300 ease-in-out hover:scale-105">
              <MoveRight className="text-white" />
            </div>
          </Link>
        </div>
      </div>
      <div className="ml-36 fixed top-0 z-50 w-full flex flex-row  justify-between items-center bg-blue-300 p-4">
        <div className="flex gap-6 ">
          <div
            className={`font-extralight text-base cursor-pointer ${
              isItemClicked(0) ? "font-extrabold" : ""
            }`}
            onClick={() => handleClick(0)}
          >
            HOME
          </div>
          <div
            className={`font-extralight text-base  cursor-pointer ${
              isItemClicked(1) ? "font-extrabold" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            PROJECT
          </div>
          <div
            className={`font-extralight text-base  cursor-pointer ${
              isItemClicked(2) ? "font-extrabold" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            SALES
          </div>
        </div>

        <div className="flex flex-row justify-between mr-52 items-center">
          <div className="relative mr-4 w-12 h-12">
            <div className="w-full h-full rounded-full border-2 border-white bg-gradient-to-b from-white to-transparent bg-clip-padding-box"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <User className="text-white text-opacity-80" />
            </div>
          </div>

          <div>
            <Image
              src="/image341.svg"
              width={228}
              height={32}
              alt="Imagem de fundo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
