import { useState } from "react";
import ModalPerguntas from "../Componentes/tags/ModalPerguntas";

function Sobre() {
  const [abertoId, setAbertoId] = useState(null);

  const perguntas = [
    {
      id: 1,
      Titulo: "O que é automação de processos?",
      Descricao:
        "A automação de processos é a aplicação de tecnologias e técnicas para aprimorar e otimizar processos manuais e repetitivos em diversas áreas, como produção, logística e administração.",
    },
    {
      id: 2,
      Titulo: "O que é processamento de sinais?",
      Descricao:
        "O processamento de sinais é a análise, interpretação e transformação de sinais, como voz, imagens e dados, para aprimorar a qualidade e eficiência de sistemas e processos.",
    },
    {
      id: 3,
      Titulo: "O que é inteligência artificial?",
      Descricao: "A inteligência artificial é a aplicação de tecnologias e técnicas para criar sistemas capazes de realizar tarefas que normalmente exigem inteligência humana, como reconhecimento de voz e imagem, tomada de decisão e aprendizado automático.",
    },
    {
      id: 4,
      Titulo: "O que é melhoria de processos de desenvolvimento de software?",
      Descricao: "A melhoria de processos de desenvolvimento de software é a aplicação de técnicas e metodologias para aprimorar a qualidade e eficiência de processos de desenvolvimento de software, desde a concepção até a entrega final.",
    },
    {
      id: 5,
      Titulo: "O que é automação industrial?",
      Descricao: "A automação industrial é a aplicação de tecnologias e técnicas para otimizar e automatizar processos em ambientes industriais, como produção, logística e controle de qualidade.",
    },
    {
      id: 6,
      Titulo: "Como posso colaborar com o grupo de P&D?",
      Descricao: "Você pode entrar em contato conosco por meio do formulário de contato em nosso site ou por e-mail, e podemos discutir possíveis oportunidades de colaboração, como projetos de pesquisa, parcerias ou programas de estágio.",
    },
  ];

  return (
    <div className="w-full min-h-[781px] flex flex-col items-center gap-16 text-[#EFECFF] justify-center bg-[#1C1D20] px-4 py-4"
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
