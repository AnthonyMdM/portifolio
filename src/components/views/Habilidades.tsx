"use client";

import Image from "next/image";
import React from "react";

type Ferramenta = {
  src: string;
  nome: string;
};

const ferramentas: Ferramenta[] = [
  { src: "/ferramentas/javascript.svg", nome: "JavaScript" },
  { src: "/ferramentas/typescript.svg", nome: "Typescript" },
  { src: "/ferramentas/react.svg", nome: "React" },
  { src: "/ferramentas/next.svg", nome: "Next" },
  { src: "/ferramentas/redux.svg", nome: "Redux" },
  { src: "/ferramentas/tailwind.svg", nome: "Tailwind" },
  { src: "/ferramentas/nodejs.svg", nome: "Node.js" },
  { src: "/ferramentas/php.svg", nome: "PHP" },
  { src: "/ferramentas/java.svg", nome: "Java" },
  { src: "/ferramentas/docker.svg", nome: "Docker" },
  { src: "/ferramentas/mysql.svg", nome: "MySQL" },
  { src: "/ferramentas/postgresql.svg", nome: "PostgreSQL" },
  { src: "/ferramentas/git.svg", nome: "Git" },
];

export default function Habilidades() {
  return (
    <div className="w-full grid justify-center mt-12 px-4">
      <div className="flex justify-center items-center bg-[#A67B5B] dark:bg-blue-900 w-full max-w-[1200px] rounded-2xl shadow-lg overflow-hidden p-4 md:p-8">
        <div className="grid grid-rows-[auto_1fr] bg-[#fafafa] dark:bg-gray-800 w-full rounded-xl p-6 min-h-[35rem] md:min-h-[55rem]">
          <h1 className="text-center font-[Roboto] text-3xl sm:text-4xl md:text-6xl mt-4 underline underline-offset-4 text-black dark:text-white">
            <strong>Ferramentas Conhecidas</strong>
          </h1>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2 justify-items-center items-start px-4 pt-6 ">
            {ferramentas.map((ferramenta) => (
              <div
                key={ferramenta.nome}
                className="group relative flex flex-col items-center justify-center"
              >
                <Image
                  src={ferramenta.src}
                  alt={ferramenta.nome}
                  width={80}
                  height={80}
                  className="object-contain transition-transform duration-300 hover:scale-110  md:w-[200px] md:h-[150px]"
                />
                <div className="mt-2 px-2 py-1 bg-gray-800 text-white text-xs sm:text-sm md:text-base rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-[Roboto] text-center">
                  <strong>{ferramenta.nome}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
