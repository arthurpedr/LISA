function LisaRecebe() {
  const images = [
   "/01-Lisa_recebe.jpg",
    "/02-Lisa_recebe.jpg",
    "/03-Lisa_recebe.jpg",
    "/04-Lisa_recebe.jpg",
    "/05-Lisa_recebe.jpg",
    "/06-Lisa_recebe.jpg",
    "/07-Lisa_recebe.jpg",
    "/08-Lisa_recebe.jpg",
    "/09-Lisa_recebe.jpg",
    "/10-Lisa_recebe.jpg",
    "/11-Lisa_recebe.jpg",
  ];

   return (
    <div className="flex flex-col items-center py-10 w-full bg-[#e7e3ff] dark:bg-[#1C1D20] text-[#1C1D20] dark:text-[#EFECFF]">
      <div className="flex flex-col max-w-[1280px] h-[250px] text-center px-4 gap-4">
        <p className="font-[700] text-[32px] md:text-[40px]">Lisa Recebe</p>
        <p className="text-[#3F3D56] dark:text-[#CDC5FF] font-[400] md:text-[20px]">
          Durante as visitas, os estudantes exploraram projetos inovadores
          desenvolvidos no laboratório e participaram de atividades práticas nos
          espaços de eletrônica e automação, vivenciando na prática a ciência e
          a tecnologia.
        </p>
      </div>

      <div className="relative w-full overflow-hidden h-[280px] mt-6">
        <div className="absolute top-0 left-0 w-[100px] h-full z-10 bg-gradient-to-r from-[#e7e3ff] dark:from-[#1C1D20] to-transparent" />
        <div className="absolute top-0 right-0 w-[100px] h-full z-10 bg-gradient-to-l from-[#e7e3ff] dark:from-[#1C1D20] to-transparent" />

        <div className="flex w-max animate-marquee gap-8 px-4">
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              className="h-[280px] w-auto object-cover rounded-[5px]"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="flex mt-10">
        <a href="#Contato">
          <button className="py-3 px-6 bg-[#5F45FF] rounded-[8px] text-[#EFECFF] font-[700] cursor-pointer hover:bg-transparent border border-[#5F45FF] hover:text-[#5F45FF] transition-all duration-300">
            Entre em Contato
          </button>
        </a>
      </div>
    </div>
  );
}

export default LisaRecebe;
