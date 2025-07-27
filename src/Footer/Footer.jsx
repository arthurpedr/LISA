import BoxFooter from "../Componentes/tags/BoxFooter.jsx";
import ContactForm from "../Componentes/tags/ContactForm.jsx";
import { ThemeProvider } from "../Context/ThemeContext.jsx";


function Contato() {
  return (
    <ThemeProvider>
      <footer className="w-full md:h-[1050px] lg:h-[920px] flex flex-col items-center justify-center gap-16 text-[#1C1D20] dark:text-[#EFECFF]  bg-[#e7e3ff] dark:bg-[#1C1D20] px-4 py-8"
    id="Contato">
      <div className="max-w-[1280px] h-full flex flex-col items-center justify-center text-center">
        <p className="font-[700] text-[32px] md:text-[40px]">Entre em Contato</p>
        <p className="font-[400] md:text-[20px] text-[#3F3D56] dark:text-[#CDC5FF]">
          Ficou com dúvidas ou quer saber mais? Fale com a nossa equipe. Estamos
          prontos para ajudar.
        </p>
      </div>
      <div>
        <ContactForm/>
      </div>
      <div className="max-w-[1280px] lg:h-[100px] flex justify-center items-center gap-4 flex-wrap lg:flex-nowrap md:mb-10">
        <BoxFooter
        icon="./Endereco.svg"
        title="Endereço:"
        description="BR-226, S/N, Pau dos Ferros - RN, 59900-000"
        />
        <BoxFooter
        icon="./Email.svg"
        title="E-mail:"
        description="lisa@ufersa.edu.br"
        />
        <BoxFooter
        icon="./Telefone.svg"
        title="Telefone:"
        description="+55 (84) 3315-2275"
        />
      </div>
    </footer>
    </ThemeProvider>
  );
}
export default Contato;
