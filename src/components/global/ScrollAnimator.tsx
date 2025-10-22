"use client";

import { useEffect, useRef } from "react";

export function ScrollAnimator({ children }: { children: React.ReactNode }) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cria o observer uma única vez
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            // Desconecta após aparecer (performance)
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Começa a animar um pouco antes
      }
    );

    // Observa todos os elementos com data-animate
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return <>{children}</>;
}