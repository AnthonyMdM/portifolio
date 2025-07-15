import React from "react";
import { ThemeSwitch } from "./switchButton";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const title = "<Anthony Mariano />";

  function scrollTo(id) {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -80;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  // Fechar o menu ao clicar fora
  React.useEffect(() => {
    // Função para fechar o menu
    const handleClickOutside = (event) => {
      const menuElement = document.getElementById("mobile-menu");
      const buttonElement = document.querySelector(".mobileButton");

      // Verificar se o clique foi fora do menu e do botão
      if (
        menuElement &&
        !menuElement.contains(event.target) &&
        !buttonElement.contains(event.target)
      ) {
        setMenu(false);
      }
    };

    // Adicionar o evento de clique
    document.addEventListener("mousedown", handleClickOutside);

    // Limpar o evento quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Mobile Nav Header */}
      <nav className="md:hidden fixed top-0 left-0 w-full h-16 z-50  shadow flex justify-between items-center px-4 text-lg bg-primaria">
        <ThemeSwitch />
        <h1 className="font-[Roboto] dark:text-white">{title}</h1>
        <button
          onClick={() => setMenu(!menu)}
          className={`mobileButton ${menu ? "mobileButtonActive" : ""}`}
        />
      </nav>

      {/* Mobile Nav Menu */}
      {menu && (
        <div
          id="mobile-menu"
          className="md:hidden fixed top-16 left-0 w-full bg-white  dark:text-white dark:bg-gray-700 z-40 shadow-md p-4 flex flex-col gap-4 text-lg"
        >
          <button
            onClick={() => {
              scrollTo("sobre");
              setMenu(false);
            }}
          >
            Sobre
          </button>
          <button
            onClick={() => {
              scrollTo("habilidade");
              setMenu(false);
            }}
          >
            Habilidades
          </button>
          <button
            onClick={() => {
              setMenu(false);
            }}
          >
            Projetos
          </button>
          <button
            onClick={() => {
              scrollTo("contato");
              setMenu(false);
            }}
          >
            Contato
          </button>
        </div>
      )}

      {/* Desktop Nav */}
      <nav className="hidden md:flex md:items-center md:justify-between md:h-20 md:w-full md:fixed md:top-0 md:z-50 md:backdrop-blur-md md:px-10 dark:text-cyan-500 text-lg">
        <h1 className="ml-20 justify-self-start font-[Roboto] text-2xl place-self-center">
          {title}
        </h1>
        <div className="flex">
          <div className="font-[Roboto] text-xl flex justify-end gap-3 *:hover:text-white *:px-3 *:cursor-pointer">
            <button onClick={() => scrollTo("sobre")}>Sobre</button>
            <button onClick={() => scrollTo("habilidade")}>Habilidades</button>
            <button>Projetos</button>
            <button onClick={() => scrollTo("contato")}>Contato</button>
          </div>
          <ThemeSwitch />
        </div>
      </nav>
    </>
  );
};

export default Header;
