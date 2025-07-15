import React from "react";
import useVisible from "../Hook/useVisible";

const Moda = () => {
  const ref = React.useRef(null); // Referência à section monitorada pelo IntersectionObserver
  const isVisible = useVisible(ref); // Hook responsável por detectar se a section está visível na tela

  return (
    <>
      {/* Título adaptado: centralizado e com tamanho ajustado no mobile */}
      <section
        id="sobre"
        className="pt-32 md:pt-40 flex justify-center items-end px-4 md:px-8"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-[Roboto] text-gray-800 dark:text-white mb-4 text-center md:text-left">
            <strong>Software Desenvolvedor</strong>
          </h1>
        </div>
      </section>

      {/* Seção "Sobre" com responsividade */}
      <section
        ref={ref}
        className={`transition-all duration-700 ease-in-out transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        } flex justify-center mt-8 px-4`}
      >
        <div className="w-full md:max-w-4xl bg-primaria rounded-4xl shadow-lg p-4 md:p-0">
          <p className="text-base md:text-2xl font-[Poppins] text-black leading-relaxed bg-white dark:bg-gray-600 dark:text-white p-4 md:pl-[25px] md:pr-[9px] md:pt-[12px] md:pb-[40px] my-2 md:mx-4 rounded-4xl text-justify">
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
      </section>
    </>
  );
};

export default Moda;
