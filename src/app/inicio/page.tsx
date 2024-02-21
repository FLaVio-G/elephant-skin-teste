"use client";
import { Minus, MoveRight, Plus, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const icons = [
  "360.svg",
  "people360.svg",
  "circle360.svg",
  "maps360.svg",
  "galery360.svg",
  "video360.svg",
];

export default function Inicio() {
  const [clickedItem, setClickedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setClickedItem(index);
  };

  const isItemClicked = (index: number) => {
    return clickedItem === index;
  };

  const [isPlus, setIsPlus] = useState(true);
  const [showContent, setShowContent] = useState(true);

  const handleToggleClick = () => {
    setIsPlus((prevState) => !prevState);
    setShowContent((prevState) => !prevState);
  };

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <>
      <Head>
        <Link
          rel="stylesheet"
          href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
        />
      </Head>
      <div
        className="flex flex-row w-full h-screen bg-cover"
        style={{ backgroundImage: "url('/images/beiramar.png')" }}
      >
        <div
          className={`flex flex-col h-full items-center justify-center w-24 text-white p-4 ${
            showContent ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-4 justify-center flex-grow">
            {icons.map((icon, index) => (
              <div key={index}>
                <Image
                  src={`/${icon}`}
                  alt={`Icon ${index}`}
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div>

          <div className="mt-auto justify-normal items-center">
            <div>
              <Image
                src="/help360.svg"
                alt="Help Icon"
                width={24}
                height={24}
              />
            </div>
            <div className="mt-4">
              <Image
                src="/quit360.svg"
                alt="Quit Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full items-center justify-center w-24 text-white p-4">
          <div className="flex flex-col items-center gap-4 justify-center">
            {isPlus ? (
              <Plus size={32} onClick={handleToggleClick} />
            ) : (
              <Minus size={32} onClick={handleToggleClick} />
            )}
          </div>
        </div>

        <div className="flex flex-col h-full content-between justify-center w-full text-white p-4">
          {showContent ? (
            <div className="min-h-96  flex flex-col justify-end">
              <div
                className="flex flex-col justify-normal items-center text-center pt-16 font-light text-lg"
                style={{ letterSpacing: "0.1em" }}
              >
                <h2 className="text-5xl">Innovation in Your Hands</h2>
                <h4 className="mt-5 max-w-[596px] h-16 text-lg">
                  Explore, Interact and Transform the Real Estate Market with
                  Our Smart Interactive Table.
                </h4>
              </div>
              <div className="flex mt-32  flex-col items-center justify-center">
                <p className="text-2xl font-thin"> START EXPERIENCE</p>
                <Link href="/inicio">
                  <div className="rounded-full bg-black bg-opacity-25 p-4 border-white transition-all duration-300 ease-in-out hover:scale-105">
                    <MoveRight className="text-white" />
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className=" h-[550px] flex flex-row justify-start">
              <div className="w-[30%] h-[100%]">
                <div
                  className="flex flex-col h-[100%] p-4 justify-center pt-16 font-light text-lg"
                  style={{ letterSpacing: "0.1em" }}
                >
                  <h2 className="text-5xl">360° BUILDING</h2>
                  <h4 className="mt-5 max-w-[596px] h-16 text-lg">
                    View the building and availability
                  </h4>
                  <Link className="w-full" href="/inicio">
                    <button className="bg-white mt-8 flex  justify-center hover:bg-yellow-500 rounded-3xl text-black font-normal p-2">
                      LET ME IN
                      <MoveRight className="ml-4" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className=" h-[100%] w-[70%] flex justify-cente">
                <div ref={ref} className="keen-slider">
                  <div className="keen-slider__slide relative rounded-2xl bg-blue-300 number-slide1">
                    <Image
                      src="/images/predioLarge.jpg"
                      fill
                      alt="Imagem de fundo"
                      className="w-full h-full rounded-2xl"
                    />
                    <div className="flex ">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-sky-400/100">
                        BULDING
                      </div>
                      <Image
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src="/help360.svg"
                        alt="Help Icon"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    {" "}
                    <Image
                      src="/images/tourVirtual.png"
                      fill
                      alt="Imagem de fundo"
                    />
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    {" "}
                    <Image
                      src="/images/ammenties.png"
                      fill
                      alt="Imagem de fundo"
                    />
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    {" "}
                    <Image
                      src="/images/soundrange.png"
                      fill
                      alt="Imagem de fundo"
                    />
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    {" "}
                    <Image
                      src="/images/gallery.png"
                      fill
                      alt="Imagem de fundo"
                    />
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    {" "}
                    <Image src="/images/video.png" fill alt="Imagem de fundo" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="ml-36 fixed top-0 z-50 w-full flex flex-row justify-between items-center  p-4">
          <div className="flex gap-6 ">
            <div
              className={`font-extralight text-base cursor-pointer ${
                isItemClicked(0) ? "font-extrabold" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              HOME
            </div>
            <div
              className={`font-extralight text-base cursor-pointer ${
                isItemClicked(1) ? "font-extrabold" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              PROJECT
            </div>
            <div
              className={`font-extralight text-base cursor-pointer ${
                isItemClicked(2) ? "font-extrabold" : ""
              }`}
              onClick={() => handleItemClick(2)}
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
    </>
  );
}
