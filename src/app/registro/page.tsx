"use client";
import { EyeOff, MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Registro() {
  return (
    <div className="relative bg-blue-300 mx-auto w-full h-screen">
      <Image
        src="/images/beiramar.png"
        layout="fill"
        objectFit="cover"
        alt="Imagem de fundo"
      />
      <div className="flex opacity-75 bg-black/100 flex-row fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-md">
        <div className="flex mr-4">
          <Image
            src="/images/predio.jpg"
            width={505}
            height={602}
            alt="Imagem de fundo"
          />
        </div>
        <div>
          <div>
            <h1 className="font-normal text-3xl">ACESS THE PLATAFORM</h1>
            <h2 className="text-base pt-4">
              Access as a spectator by clicking let me in or log in as a broker.
            </h2>
            <p className="pt-8">JOIN A GUEST</p>
            <div className="w-16  relative overflow-hidden">
              <div className=" h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent"></div>
            </div>
            <button className="bg-transparent border border-white shadow-inner md:shadow-sm bg-opacity-25 backdrop-blur-3xl mt-8 flex w-28 justify-center rounded-3xl text-white font-normal p-2">
              LET ME IN
            </button>
          </div>

          <div className="pt-6">
            <h2> I am a broker</h2>
            <div className=" h-0.5  w-20 bg-gradient-to-r from-white via-white to-transparent"></div>
            <div className="mb-4 bg-black bg-opacity-50 pt-8 rounded-md relative">
              <input
                type="password"
                className="w-full pl-2 ml-2 border bg-black h-12  mb-4 text-white rounded-3xl bg-transparent shadow-2xl placeholder-white"
                placeholder="Type your email"
              />
              <div className="relative flex items-center">
                <input
                  type="password"
                  className="w-full pl-4 pr-12 border bg-black h-12 mb-4 text-white rounded-3xl bg-transparent shadow-2xl placeholder-white"
                  placeholder="Type your password"
                />
                <div className="absolute inset-y-0  right-0 pr-4 flex items-center cursor-pointer">
                  <div className="w-6 h-6">
                    <EyeOff />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Link className="w-full" href="/inicio">
                  <button className="bg-white mt-8 flex w-full justify-center hover:bg-yellow-500 rounded-3xl text-black font-normal p-2">
                    LOGIN
                    <MoveRight className="ml-4" />
                  </button>
                </Link>

                <p className="mt-6">
                  {" "}
                  Dont have an account?{" "}
                  <span className="text-yellow-500">Create new account</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
