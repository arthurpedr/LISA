import { useState } from "react";
import ModalPerguntas from "../Componentes/tags/ModalPerguntas";

function Sobre() {
  const [abertoId, setAbertoId] = useState(null);

  const perguntas = [
    {
      id: 1,
      Titulo: "Como funciona a plataforma?",
      Descricao:
        "Nossa plataforma conecta desenvolvedores a oportunidades em tecnologia através de desafios práticos e mentorias.",
    },
    {
      id: 2,
      Titulo: "Como posso me inscrever?",
      Descricao:
        "Você pode se inscrever clicando no botão 'Cadastrar' no topo da página.",
    },
    {
      id: 3,
      Titulo: "Preciso pagar para participar?",
      Descricao: "Não, a participação é completamente gratuita.",
    },
    {
      id: 4,
      Titulo: "Preciso de experiência prévia?",
      Descricao: "Não! Temos conteúdos para todos os níveis de conhecimento.",
    },
    {
      id: 5,
      Titulo: "Como recebo as oportunidades?",
      Descricao: "Você será notificado por e-mail e dentro da plataforma.",
    },
    {
      id: 6,
      Titulo: "A mentoria é individual?",
      Descricao: "As mentorias podem ser em grupo ou individuais, dependendo do programa.",
    },
  ];

  return (
    <div className="w-full min-h-[781px] flex flex-col items-center gap-16 text-[#EFECFF] justify-center bg-[#1C1D20] px-4 py-10"
    id="Sobre">
      <div className="text-center">
        <p className="font-[700] text-[40px]">Perguntas Frequentes</p>
        <p className="font-[400] text-[20px] text-[#CDC5FF]">
          Tire suas dúvidas sobre temas técnicos e como participar das nossas iniciativas.
        </p>
      </div>

      <div className="flex flex-col items-center justify-start gap-4 w-full max-w-[1280px]">
        {perguntas.map((faq) => (
          <ModalPerguntas
            key={faq.id}
            Titulo={faq.Titulo}
            Descricao={faq.Descricao}
            aberto={abertoId === faq.id}
            onToggle={() =>
              setAbertoId(abertoId === faq.id ? null : faq.id)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Sobre;
