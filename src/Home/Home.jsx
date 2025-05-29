import React from "react";

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-[180vh] md:h-[1020px] bg-[#1C1D20] gap-80 md:gap-20 lg:gap-[150px]"
      id="Home"
    >
      <div className="flex justify-center w-full lg:max-w-[1280px] h-[517px] gap-[0px] lg:gap-[80px] md:flex-nowrap flex-wrap">
        <div className="flex flex-col justify-center w-[300px] md:w-[50%] h-full text-[#EFECFF] z-10 gap-[16px]">
          <p className="font-[700] text-[26px] lg:text-[56px]">
            Laboratório de Inovação em Software e Automação
          </p>
          <p className="font-[400] text-[16px] md:text-[24px] text-[#CDC5FF] text-justify">
            Somos mestres e doutores em computação, especialistas em
            inteligência artificial, automação e desenvolvimento de software.
            Unimos expertise acadêmica e prática para criar tecnologias que
            impulsionam empresas, profissionais e o futuro da inovação.
          
          </p>
          <div>
            <button className="bg-[#5F45FF] hover:bg-transparent border-2 border-[#5F45FF] w-full lg:w-[400px] h-[56px] text-[white] font-[600] text-md px-6 py-3 rounded-md transition-all duration-300 hover:ring-0 cursor-pointer">
              Leia mais
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-[300px] lg:w-[50%] h-full text-[#F2F2F2] relative">
          <img
            className="w-full h-full z-10 absolute drop-shadow-[0_110px_80px_rgba(95,69,255,0.5)] mb-60 md:mb-0"
            src="./Group1.svg"
            alt="Notebook"
          />
        </div>
      </div>
      <div className="relative w-full lg:w-[1280px] overflow-hidden flex h-[88px] bg-white rounded-[16px]">

        {/* Gradiente nas laterais*/}
        <div className="absolute left-0 top-0 w-[100px] h-full z-20 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        <div className="absolute right-0 top-0 w-[100px] h-full z-20 pointer-events-none bg-gradient-to-l from-white to-transparent" />


        <div
          className="flex animate-slide whitespace-nowrap py-4 px-2"
          style={{
            animation: "slide 30s linear infinite",
          }}
        >
          <div className="w-[100px] h-[88px] bg-gradient-to-r from-white to-transparent"></div>

          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img
                src="./Ufersa.svg"
                alt="Logo Ufersa"
                className="h-full inline-block mx-5"
              />
              <img
                src="./Logo.svg"
                alt="LISA"
                className="h-full inline-block mx-5"
              />
              <img
                src="./Ufersa.svg"
                alt="Logo Ufersa"
                className="h-full inline-block mx-5"
              />
              <img
                src="./Logo.svg"
                alt="LISA"
                className="h-full inline-block mx-5"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
