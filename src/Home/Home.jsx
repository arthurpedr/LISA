import React from "react";
import { useState } from "react";
import Darkmode from "../Componentes/tags/Darkmode.jsx";
import { ThemeProvider } from "../Context/ThemeContext.jsx";

function TrocarTexto() {
  const logos = [
    "./Ufersa.svg",
    "./APAE.svg",
    "./Rebeca.svg",
    "./Ufersa.svg",
    "./APAE.svg",
    "./Rebeca.svg",
  ];

  const [mostrarTexto2, setMostrarTexto2] = useState(false);

  const handleClick = () => {
    setMostrarTexto2((prev) => !prev); // ou alternar com !mostrarTexto2 se quiser ir e voltar
  };

  return (
    <ThemeProvider>
      <div
        className="flex flex-col justify-center items-center w-full h-[170vh] md:h-[1020px] bg-[#e7e3ff] dark:bg-[#1C1D20] gap-95 md:gap-20 lg:gap-[150px]"
        id="Home"
      >
        <div className="flex justify-center w-full lg:max-w-[1280px] h-[517px] mt-20 md:mt-0 gap-[40px] lg:gap-[80px] md:flex-nowrap flex-wrap">
          <div className="flex flex-col justify-center w-[90vw] md:w-[50%] h-full text-[#1C1D20] dark:text-[#EFECFF] z-10 gap-4">
            <p className="font-[700] text-[28px] lg:text-[56px]">
              Laboratório de Inovação em Software e Automação
            </p>
            <div className={mostrarTexto2 ? "hidden" : "block"}>
              <p className="font-[400] text-[16px] md:text-[24px] text-[#3F3D56] dark:text-[#CDC5FF] text-justify">
                Somos mestres e doutores em computação, especialistas em
                inteligência artificial, automação e desenvolvimento de
                software. Unimos expertise acadêmica e prática para criar
                tecnologias que impulsionam empresas, profissionais e o futuro
                da inovação.
              </p>
            </div>
            <div className={mostrarTexto2 ? "block" : "hidden"}>
              <p className="font-[400] text-[14px] md:text-[18px] text-[#3F3D56] dark:text-[#CDC5FF] text-justify">
                O Laboratório de Inovação em Software e Automação (LISA) está
                situado na Ufersa Câmpus Pau dos Ferros. O LISA se destaca como
                um espaço dinâmico que fomenta a inovação tecnológica no Oeste
                Potiguar, oferecendo aos estudantes oportunidades de se
                envolverem em projetos concretos de automação e desenvolvimento
                de software, com aplicação prática e impacto regional. Com uma
                equipe multidisciplinar, o LISA desenvolve aplicaçãoes em
                automação e controle, inteligência artificial aplicada e
                desenvolvimento de software.
              </p>
            </div>
            <div className="flex gap-8">
              <button
                onClick={handleClick}
                className="bg-[#5F45FF] hover:bg-transparent hover:text-[#5F45FF] border-2 border-[#5F45FF] w-full lg:w-[400px] h-[56px] text-[white] font-[600] text-[12px] md:text-[18px] px-6 py-3 rounded-md transition-all duration-300 hover:ring-0 cursor-pointer"
              >
                {mostrarTexto2 ? "Mostrar menos" : "Leia mais"}
              </button>
              <Darkmode />
            </div>
          </div>
          <div className="flex justify-center items-center w-[300px] lg:w-[50%] h-full text-[#F2F2F2] relative">
            <img
              className="w-full h-full z-10 absolute drop-shadow-[0_110px_80px_rgba(95,69,255,0.5)] mb-50 md:mb-0"
              src="./Group1.svg"
              alt="Notebook"
            />
          </div>
        </div>
        <div className="relative w-full lg:w-[1280px] overflow-hidden z-20 flex h-[88px] bg-white md:rounded-[16px]">
          <div className="absolute top-0 left-0 w-[100px] h-full z-10 bg-gradient-to-r from-[#e7e3ff] to-transparent" />
          <div className="absolute top-0 right-0 w-[100px] h-full z-10 bg-gradient-to-l from-[#e7e3ff] to-transparent" />

          <div className="marquee-container flex gap-2 py-2">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Slide ${i}`}
                className="h-full inline-block mx-5"
              />
            ))}
          </div>
        </div>

        <style>{`
        .marquee-container {
      display: flex;
      width: max-content;
      animation: slide-marquee 30s linear infinite;
    }

    @keyframes slide-marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-1520px);
      }
    }
      `}</style>
      </div>
    </ThemeProvider>
  );
}

export default TrocarTexto;
