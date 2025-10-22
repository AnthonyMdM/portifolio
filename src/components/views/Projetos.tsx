"use client";

import { projetos } from "@/src/util/projectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projetos() {
  return (
    <div className="relative w-full py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primaria/10 to-transparent dark:from-secundaria/10 dark:to-transparent" />
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-roboto text-sm font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">
            Meus Projetos
          </h2>
        </div>

        <div className="relative space-y-20 md:space-y-28">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" />

          {projetos.map((projeto, index) => (
            <div
              key={projeto.slug}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 opacity-0 animate-on-scroll ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              data-animate={index % 2 !== 0 ? "slide-left" : "slide-right"}
            >
              {/* Decorative circle on the timeline */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 hidden md:block" />

              <div className="md:w-1/2 w-full group">
                <Link
                  href={`/${projeto.slug}`}
                  className="block overflow-hidden rounded-lg shadow-2xl shadow-black/10 dark:shadow-black/40 hover:shadow-primaria/40 dark:hover:shadow-secundaria/40 transition-all duration-300"
                >
                  <Image
                    src={projeto.imagem}
                    alt={`Imagem do ${projeto.nome}`}
                    width={500}
                    height={300}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold font-[Roboto] text-gray-800 dark:text-white">
                  {projeto.nome}
                </h3>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {projeto.descricao}
                </p>
                <Link
                  href={`/home/${projeto.slug}`}
                  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Ver Projeto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
