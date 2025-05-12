import React from "react";
import emailjs from "@emailjs/browser";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import useVisible from "../Hook/useVisible";

const Contato = () => {
  const ref = React.useRef(null); // Referência à section monitorada pelo IntersectionObserver
  const isVisible = useVisible(ref); // Hook responsável por detectar se a section está visível na tela
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f4r9a5l",
        "template_cfw24vb",
        form.current,
        "M5K9iKTZVxCGQ8E3T"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          alert("Erro ao enviar. Tente novamente.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contato"
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      } grid justify-center mt-5 pt-15 px-4`}
    >
      <div className="md:w-[1000px] w-[95vw] mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold text-center mb-6">
          Entre em Contato
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] place-items-center md:items-center md:justify-self-start">
          <div className="md:w-70 md:mr-30 flex-shrink-0 ml-0 mb-2 md:mb-40 gap-2 md:gap-10 md:grid md:grid-rows-[auto_auto_auto] flex md:ml-20">
            <h1 className="font-[Roboto] text-3xl md:text-4xl font-bold">
              Anthony Mariano
            </h1>
            <a
              href="https://github.com/AnthonyMdM"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="md:flex md:items-center md:gap-3">
                <Github className=" md:row-2 w-10 h-10 md:w-15 md:h-15" />
                <p className="hidden md:block row-2 text-[Roboto] text-xl">
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
              <div className="md:flex md:items-center md:gap-3">
                <Linkedin className="md:row-3 w-10 h-10 md:w-15 md:h-15" />
                <p className="hidden md:block row-3 text-[Roboto] text-xl">
                  Anthony Mariano
                </p>
              </div>
            </a>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full space-y-6 col-2"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                name="name"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contato;
