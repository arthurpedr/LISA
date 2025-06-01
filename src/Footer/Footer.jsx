import BoxFooter from "../Componentes/tags/BoxFooter.jsx"


function Contato() {
  return (
    <footer className="w-full h-[1050px] lg:h-[920px] flex flex-col items-center justify-center gap-16 text-[#EFECFF] bg-[#1C1D20] px-4"
    id="Contato">
      <div className="max-w-[1280px] h-[83px] flex flex-col items-center justify-center">
        <p className="font-[700] text-[40px]">Entre em Contato</p>
        <p className="font-[400] text-[20px] text-[#CDC5FF]">
          Ficou com dúvidas ou quer saber mais? Fale com a nossa equipe. Estamos
          prontos para ajudar.
        </p>
      </div>
      <div>
        <form className="w-[300px] md:w-[500px] h-[519px] flex flex-col items-center justify-center gap-[20px]">
          <label htmlFor="nome" className="self-start text-[16px] text-[#EFECFF]">
            Nome
          </label>
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-[56px] bg-[#EFECFF] rounded-[8px] px-4 text-[#BABABB] border border-[#BABABB] focus:outline-none
"
          />

          <label htmlFor="email" className="self-start text-[16px] text-[#EFECFF]">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[56px] bg-[#EFECFF] rounded-[8px] px-4 text-[#BABABB] border border-[#BABABB] focus:outline-none
"
          />

          <label
            htmlFor="assunto"
            className="self-start text-[16px] text-[#EFECFF]"
          >
            Assunto
          </label>
          <input
            type="text"
            placeholder="Assunto"
            className="w-full h-[56px] bg-[#EFECFF] rounded-[8px] px-4 text-[#BABABB] border border-[#BABABB] focus:outline-none
"
          />

          <label
            htmlFor="mensagem"
            className="self-start text-[16px] text-[#EFECFF]"
          >
            Mensagem
          </label>
          <textarea
            placeholder="Mensagem"
            className="w-full h-[80px] bg-[#EFECFF] rounded-[8px] px-4 py-2 text-[#BABABB] border border-[#BABABB] focus:outline-none
"
          />

          <button className="w-full h-[55px] bg-[#5F45FF] rounded-[8px] text-[#EFECFF] font-[700] cursor-pointer hover:bg-transparent hover:border border-[#5F45FF] transition-all duration-300">
            Enviar Mensagem
          </button>
        </form>
      </div>
      <div className="max-w-[1304px] h-[81px] flex justify-center items-center gap-4 flex-wrap lg:flex-nowrap mb-50 md:mb-45 lg:mb-0">
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
  );
}
export default Contato;
