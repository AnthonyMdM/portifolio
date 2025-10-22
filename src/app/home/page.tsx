import { ScrollAnimator } from "@/src/components/global/ScrollAnimator";
import { ThemeSwitch } from "@/src/components/global/switchButton";
import Background from "@/src/components/views/BackGround";
import Contato from "@/src/components/views/Contato";
import Habilidades from "@/src/components/views/Habilidades";
import Header from "@/src/components/views/Header";
import Projetos from "@/src/components/views/Projetos";
import Sobre from "@/src/components/views/Sobre";
export default function name() {
  return (
    <main>
      <Background />
      <Header />
      <ScrollAnimator>
        <section
          id="sobre"
          data-animate="slide-up"
          className="opacity-0 animate-on-scroll"
        >
          <Sobre />
        </section>

        <section
          id="habilidades"
          data-animate="scale"
          className="opacity-0 animate-on-scroll"
        >
          <Habilidades />
        </section>
        <section
          id="projetos"
          data-animate="scale"
          className="opacity-0 animate-on-scroll"
        >
          <Projetos />
        </section>
        <section
          id="contato"
          data-animate="slide-lef"
          className="opacity-0 animate-on-scroll"
        >
          <Contato />
        </section>
      </ScrollAnimator>
    </main>
  );
}
