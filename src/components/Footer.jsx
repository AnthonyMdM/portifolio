import React from "react";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";

const Footer = () => {
  return (
    <div className="h-20 bg-primaria mt-15 flex items-center justify-center">
      <p className="text-center font-[Roboto] text-lg text-[#fafafa]">Codificado por <br></br> © 2025 Anthony Mariano</p>
    </div>
  );
};
{
  /* <div className="flex justify-end gap-2 items-center ml-20">
        <p className="text-3xl font-[Roboto]">INFORMAÇÕES PARA CONTATO: </p>
        <Linkedin className="w-15 h-15 " />
        <Github className="w-15 h-15" />
      </div> */
}
export default Footer;
