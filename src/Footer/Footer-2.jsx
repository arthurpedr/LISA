import CardsSocial from "../Componentes/tags/CardsSocial.jsx";
import { ThemeProvider } from "../Context/ThemeContext.jsx";

function Footertwo() {
  return (
    <ThemeProvider>
      <div className="w-full bg-[#e7e3ff] dark:bg-[#1C1D20] text-[#1C1D20] dark:text-[#EFECFF] py-8 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between gap-10">
        
        <div className="flex justify-center">
          <img className="w-[40vw] max-w-[200px] lg:max-w-[300px] hidden dark:block" src="./Logo.svg" alt="lisa" />
          <img className="w-[40vw] max-w-[200px] lg:max-w-[300px] block dark:hidden" src="./Logo-2.svg" alt="lisa" />
        </div>

        <div className="flex flex-col text-center lg:text-left gap-2 font-semibold">
          <p className="font-bold mb-2">Links úteis</p>
          <a className="hover:text-[#5F45FF]" href="#Serviços">Serviços</a>
          <a className="hover:text-[#5F45FF]" href="#Projetos">Projetos</a>
          <a className="hover:text-[#5F45FF]" href="#Equipe">Equipe</a>
          <a className="hover:text-[#5F45FF]" href="#Sobre">Dúvidas</a>
          <a className="hover:text-[#5F45FF]" href="#Contato">Contato</a>
        </div>

        <div className="flex flex-col text-center lg:text-left gap-2">
          <p className="font-bold mb-2">Redes Sociais</p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="https://github.com/lisa-ufersa" target="_blanc" rel="noopener noreferrer"><img className="w-10 cursor-pointer bg-[#5F45FF] rounded-full p-1" src="./branco-github.svg" alt="github" /></a>
            <a href="https://www.instagram.com/lisa.ufersa/" target="_blanc" rel="noopener noreferrer"><img className="w-10 cursor-pointer bg-[#5F45FF]  rounded-full p-1" src="./branco-instagram.svg" alt="instagram" /></a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4">
          <CardsSocial
            title="Pedro Arthur"
            description="Desenvolvedor Front-End"
            icon="./branco-github.svg"
            link="https://github.com/arthurpedr"
            icon2="./branco-instagram.svg"
            link2="https://www.instagram.com/pedro_marrtins/"
          />
          <CardsSocial
            title="Ruan"
            description="UX/UI Design"
            icon="./branco-github.svg"
            link="https://github.com/arthurpedr"
            icon2="./branco-instagram.svg"
            link2="https://www.instagram.com/pedro_marrtins/"
          />
        </div>
      </div>

      <div className="w-full text-center mt-10 py-4 border-t">
        <p className="text-sm md:text-base">
          &copy; LISA 2025 - Todos os direitos reservados.
        </p>
      </div>
    </div>
    </ThemeProvider>
  );
}
export default Footertwo;
