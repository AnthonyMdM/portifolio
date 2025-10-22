"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
const Contato = () => {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const templateParams = {
      name: (formData.get("name") || "") as string,
      email: (formData.get("email") || "") as string,
      message: (formData.get("message") || "") as string,
    };

    try {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE ||
        !process.env.NEXT_PUBLIC_EMAILJS_USER
      ) {
        throw new Error("Variáveis de ambiente do EmailJS não configuradas!");
      }
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER
      );

      alert("Mensagem enviada com sucesso!");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div
      id="contato"
      className={`transition-all duration-700 ease-in-out transform grid justify-center mt-5 pt-15 px-4 text-black`}
    >
      <div className="md:w-[65vw] w-[85vw] mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold text-center mb-6">
          Entre em Contato
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_1fr] place-items-center md:items-center md:justify-self-start">
          <div className="lg:w-70 md:w-40 w-30 md:mr-7 lg:mr-10 xl:mr-30 flex-shrink-0 ml-0 mb-2 md:mb-40 gap-2 md:gap-2 lg:gap-10 md:grid md:grid-rows-[auto_auto_auto] flex md:ml-5 lg:ml-10">
            <h1 className="font-[Roboto] text-3xl lg:text-4xl font-bold">
              Anthony Mariano
            </h1>
            <a
              href="https://github.com/AnthonyMdM"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="md:flex md:items-center md:gap-2 lg:gap-3">
                <Image
                  src={"/contato/github.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className=" w-10 h-10 md:w-10 lg:w-15 md:h-15"
                />
                <p className="hidden md:block row-2 text-[Roboto] text-sm lg:text-xl">
                  AnthonyMdM
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-mariano-b43243214/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="md:flex md:items-center md:gap-2 lg:gap-3">
                <Image
                  src={"/contato/linkedin.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 md:w-10 lg:w-15 md:h-15"
                />
                <p className="hidden md:block row-3 text-[Roboto] text-sm  lg:text-xl">
                  Anthony Mariano
                </p>
              </div>
            </a>
          </div>
          <form onSubmit={sendEmail} className="w-full space-y-6 col-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 font-[Roboto]">
                Nome
              </label>
              <input
                name="name"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 font-[Roboto]">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 font-[Roboto]">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-[Roboto]"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contato;
