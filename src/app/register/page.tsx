"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
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
              <div className=" h-0.5  w-full bg-gradient-to-r from-white via-white to-transparent"></div>
            </div>
            <p className=" pt-6"> lET ME IN </p>
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
              <input
                type="password"
                className="w-full ml-2 pl-4 border bg-black h-12  mb-4 text-white rounded-3xl bg-transparent shadow-2xl placeholder-white"
                placeholder="Type your password"
              />

              <div className="flex flex-col justify-center items-center">
                <button className="bg-white mt-8 flex w-full justify-center  rounded-3xl text-black font-normal p-2 ">
                  LOGIN
                  <MoveRight className="ml-4" />
                </button>
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
