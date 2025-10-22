"use client";

import React from "react";

export default function Sobre() {
  return (
    <>
      <div className="pt-32 md:pt-40 flex justify-center items-end px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl font-[Roboto] text-gray-800 dark:text-white mb-4 text-center md:text-left transition-colors duration-500">
          <strong>Software Desenvolvedor</strong>
        </h1>
      </div>
      <div className="transition-all duration-700 ease-in-out transform flex justify-center mt-8 px-4">
        <div className="w-full  md:max-w-4xl rounded-4xl shadow-lg bg-primaria p-4 transition-colors duration-500">
          <p className="text-base md:text-2xl rounded-4xl font-[Poppins] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 leading-relaxed text-justify py-3 px-2">
            Olá! Meu nome é Anthony. Sou graduado em Tecnologia em Sistemas para
            Internet pelo Instituto Federal de São Paulo (IFSP - São João da Boa
            Vista). Apaixonado por programação, atuando com energia e dedicação
            em cada projeto. Minhas principais ferramentas incluem React.js,
            Redux, MYSQL e PostgreSQL. Busco sempre unir funcionalidade e
            excelência técnica nas soluções que desenvolvo. Seja bem-vindo ao
            meu portfólio! Aqui você encontrará projetos que evidenciam minhas
            habilidades. Sinta-se à vontade para explorar e conhecer mais sobre
            meu trabalho.
          </p>
        </div>
      </div>
    </>
  );
}
