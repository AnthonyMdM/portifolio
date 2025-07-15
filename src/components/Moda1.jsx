import React from "react";
import Docker from "../assets/docker.svg?react";
import Git from "../assets/git.svg?react";
import Java from "../assets/java.svg?react";
import Javascript from "../assets/javascript.svg?react";
import Mysql from "../assets/mysql.svg?react";
import Node from "../assets/nodejs.svg?react";
import Php from "../assets/php.svg?react";
import Postgresql from "../assets/postgresql.svg?react";
import ReactSVG from "../assets/react.svg?react";
import ReduxSVG from "../assets/redux.svg?react";
import TailwindSVG from "../assets/tailwind.svg?react";
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
      <div className="flex justify-center items-center bg-[#A67B5B] h-auto md:h-[62rem] w-100 max-w-[1200px] rounded-2xl shadow-lg p-4 sm:p-6 sm:w-full">
        {/* Container interno responsivo */}
        <div className="grid grid-rows-[auto_1fr] bg-[#fafafa]  w-full h-full rounded-xl p-4 sm:p-6">
          {/* Título responsivo */}
          <h1 className="text-center font-[Roboto] text-3xl sm:text-4xl md:text-6xl mt-4 underline underline-offset-4">
            <strong>Ferramentas Conhecidas</strong>
          </h1>

          {/* Grade de ícones responsiva */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-6 sm:gap-y-10 gap-x-4 sm:gap-x-6 place-items-center px-2 sm:px-5 pb-6 sm:pb-10 mt-4 sm:mt-6">
            <IconeComLegenda Icone={Docker} nome="Docker" />
            <IconeComLegenda Icone={Java} nome="Java" />
            <IconeComLegenda Icone={Mysql} nome="MySQL" top="top-45" />
            <IconeComLegenda Icone={Javascript} nome="JavaScript" />
            <IconeComLegenda Icone={Git} nome="Git" />
            <IconeComLegenda Icone={Postgresql} nome="PostgreSQL" />
            <IconeComLegenda Icone={Php} nome="PHP" top="top-45" />
            <IconeComLegenda Icone={Node} nome="Node.js" top="top-50" />
            <IconeComLegenda Icone={ReactSVG} nome="React" />
            <IconeComLegenda Icone={ReduxSVG} nome="Redux" />
            <IconeComLegenda Icone={TailwindSVG} nome="Tailwind" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moda1;
