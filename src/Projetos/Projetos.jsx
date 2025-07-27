import { ThemeProvider } from "../Context/ThemeContext";

function Projetos() {
  return (
    <ThemeProvider>
      <div className="relative w-full h-full lg:h-[411px] bg-[#e7e3ff] dark:bg-[#1C1D20] text-[#1C1D20] dark:text-[#EFECFF] flex justify-center flex-col items-center gap-32"
    >
      <div className="flex justify-center items-center max-w-[1280px] gap-90 md:gap-45 lg:gap-32 flex-wrap-reverse lg:flex-nowrap py-4">
        <div className="w-[220px] h-[220px]">
          <img className="w-full" src="./Fogetao.svg" alt="lisa" />
        </div>
        <div className="flex flex-col items-center max-w-[1280px] lg:max-w-[1000px] h-[271px] gap-[50px]">
          <div className="flex flex-col text-center max-w-[1280px] max-md:w-[90vw]">
            <p className="font-[700] text-[32px] md:text-[40px]">Nossos Propósitos</p>
            <p className="font-[400] md:text-[20px] text-[#3F3D56] dark:text-[#CDC5FF]">Conheça a missão, visão e valores que guiam nosso programa.</p>
          </div>
          <div className="flex max-w-[1000px] gap-4 text-[16px] font-[400] flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="bg-[#ffffff] dark:bg-[#EFECFF] text-[#1F2023] w-[90vw] md:w-[317px] md:h-[148px] items-center flex text-center rounded-[16px] p-4 shadow-lg shadow-[#000]/50">
              <p>
                <span>Missão:</span> Estar na vanguarda da tecnologia, aplicando as tendências mais atuais para resolver desafios complexos.
              </p>
            </div>
            <div className="bg-[#ffffff] dark:bg-[#EFECFF] text-[#1F2023] w-[90vw] md:w-[317px] md:h-[148px] p-4 items-center flex text-center rounded-[16px] shadow-lg shadow-[#000]/50">
              <p><span>Visão:</span> Ser referência na criação de soluções tecnológicas inovadoras que gerem impacto positivo.</p>
            </div>
            <div className="bg-[#ffffff] dark:bg-[#EFECFF] text-[#1F2023] w-[90vw] md:w-[317px] md:h-[148px] p-4 items-center flex text-center rounded-[16px] shadow-lg shadow-[#000]/50">
              <p><span>Valores:</span> Compartilhar conhecimento, fomentar a comunidade e crescer com propósito.</p>
            </div>

          </div>
        </div>
      </div>
      <div className="left-[-50px] top-[500px] md:top-[350px] lg:top-[230px] absolute drop-shadow-[0_50px_80px_rgba(95,69,255,0.5)] py-50 lg:py-0">
        <img className="w-[215px] h-[216px] relative z-10" src="./Metade-lua.svg" alt="lisa"/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Projetos;
