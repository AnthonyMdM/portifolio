import React from "react";
import Docker from "../assets/ferramentas/docker.svg?react";
import Git from "../assets/ferramentas/git.svg?react";
import Java from "../assets/ferramentas/java.svg?react";
import Javascript from "../assets/ferramentas/javascript.svg?react";
import Mysql from "../assets/ferramentas/mysql.svg?react";
import Node from "../assets/ferramentas/nodejs.svg?react";
import Php from "../assets/ferramentas/php.svg?react";
import Postgresql from "../assets/ferramentas/postgresql.svg?react";
import ReactSVG from "../assets/ferramentas/react.svg?react";
import ReduxSVG from "../assets/ferramentas/redux.svg?react";
import TailwindSVG from "../assets/ferramentas/tailwind.svg?react";
import Typescript from "../assets/ferramentas/typescript.svg?react";
import Next from "../assets/ferramentas/next.svg?react";
import useVisible from "../Hook/useVisible";
import { IconeComLegenda } from "../Hook/IconeComLegenda";

const Moda1 = () => {
  const ref = React.useRef(null);
  const isVisible = useVisible(ref);

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform w-full ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      } grid justify-center mt-12 px-4 `}
      id="habilidade"
    >
      {/* Container externo responsivo */}
      <div className="flex justify-center items-center bg-[#A67B5B] h-auto md:h-[73rem] w-100 max-w-[1200px] rounded-2xl shadow-lg sm:p-6 sm:w-full overflow-hidden p-4 md:py-15">
        {/* Container interno responsivo */}
        <div className="grid grid-rows-[auto_1fr] bg-[#fafafa] w-full h-auto rounded-xl md:h-[70rem] p-4 sm:p-6">
          {/* Título responsivo */}
          <h1 className="text-center font-[Roboto] text-3xl sm:text-4xl md:text-6xl mt-4 underline underline-offset-4">
            <strong>Ferramentas Conhecidas</strong>
          </h1>

          {/* Grade de ícones responsiva */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-6 sm:gap-y-5 dm:gap-y-10 gap-x-4 sm:gap-x-6 place-items-center px-2 sm:px-5 pb-6 sm:pb-10 mt-4 sm:mt-6 h-full">
            <IconeComLegenda Icone={Javascript} nome="JavaScript" />
            <IconeComLegenda Icone={Typescript} nome="Typescript" />
            <IconeComLegenda Icone={ReactSVG} nome="React" top="top-38" />
            <IconeComLegenda Icone={Next} nome="Next" top="top-43" />
            <IconeComLegenda Icone={ReduxSVG} nome="Redux" />
            <IconeComLegenda Icone={TailwindSVG} nome="Tailwind" top="top-35" />
            <IconeComLegenda Icone={Node} nome="Node.js" top="top-35" />
            <IconeComLegenda Icone={Php} nome="PHP" />
            <IconeComLegenda Icone={Java} nome="Java" top="top-45" />
            <IconeComLegenda Icone={Docker} nome="Docker" />
            <IconeComLegenda Icone={Mysql} nome="MySQL" top="top-35" />
            <IconeComLegenda Icone={Postgresql} nome="PostgreSQL" />
            <IconeComLegenda Icone={Git} nome="Git" top="top-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moda1;
