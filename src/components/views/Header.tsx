"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeSwitch } from "../global/switchButton";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const title = "<Anthony Mariano />";

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ] as const;

  // Fecha o menu ao clicar fora
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Node;

    if (
      menuRef.current &&
      !menuRef.current.contains(target) &&
      buttonRef.current &&
      !buttonRef.current.contains(target)
    ) {
      setMenuOpen(false);
    }
  }, []);

  // Gerencia evento de click outside e scroll lock
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen, handleClickOutside]);

  // Scroll suave para seções
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);

        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }

        setMenuOpen(false);
      }
    },
    []
  );

  return (
    <>
      {/* Header Mobile */}
      <header className="md:hidden fixed top-0 left-0 w-full h-16 z-50 shadow-md flex justify-between items-center px-4 bg-white dark:bg-gray-800 transition-colors">
        <ThemeSwitch />

        <h1 className="font-roboto text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h1>

        <button
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-6 h-5 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </header>

      {/* Menu Mobile com transição */}
      <nav
        ref={menuRef}
        className={`md:hidden fixed top-16 left-0 w-full bg-white/50 dark:bg-gray-700 z-40 shadow-lg transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-center text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-cyan-400 transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Header Desktop */}
      <header className="hidden md:flex items-center justify-between h-20 w-full fixed top-0 z-50 px-10 backdrop-blur-md bg-white/50 dark:bg-gray-900 shadow-sm transition-colors">
        <h1 className="font-roboto text-2xl font-bold text-gray-900 dark:text-cyan-500">
          {title}
        </h1>

        <nav className="flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-roboto text-lg font-medium text-gray-700 dark:text-cyan-500 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <ThemeSwitch />
        </nav>
      </header>
    </>
  );
};

export default Header;
