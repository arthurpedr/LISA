import { useState } from "react";
import ModalPerguntas from "../Componentes/tags/ModalPerguntas";
import { ThemeProvider } from "../Context/ThemeContext";

function Sobre() {
  const [abertoId, setAbertoId] = useState(null);

  const perguntas = [
   {
    id: 1,
    Titulo: "O que é o LISA?",
    Descricao:
      "O Laboratório de Inovação em Software e Automação (LISA) é um espaço dedicado à pesquisa, desenvolvimento e inovação nas áreas de tecnologia da informação, automação industrial, robótica e soluções digitais.",
  },
  {
    id: 2,
    Titulo: "Quem pode participar das atividades do LISA?",
    Descricao:
      "Estudantes, professores, pesquisadores e parceiros da indústria podem participar de projetos, cursos e eventos do laboratório. Algumas atividades são abertas ao público externo mediante inscrição.",
  },
  {
    id: 3,
    Titulo: "Quais áreas de pesquisa o LISA desenvolve?",
    Descricao:
      "Desenvolvimento de software e aplicativos, automação de processos industriais, robótica aplicada, Internet das Coisas (IoT), Inteligência Artificial e Machine Learning, tecnologias assistivas, infraestrutura e segurança de redes.",
  },
  {
    id: 4,
    Titulo: "Como posso me inscrever em cursos ou eventos do laboratório?",
    Descricao:
      "As inscrições são divulgadas pelo site oficial e pelas redes sociais do LISA (@lisa.ufersa). Basta acompanhar as publicações e seguir as instruções de inscrição em cada oportunidade.",
  },
  {
    id: 5,
    Titulo: "Empresas podem propor parcerias ou projetos?",
    Descricao:
      "Sim. O LISA está aberto a parcerias com empresas públicas e privadas interessadas em inovação tecnológica, desenvolvimento de soluções personalizadas ou capacitação profissional.",
  },
  {
    id: 6,
    Titulo: "Como entrar em contato com o LISA?",
    Descricao:
      "Você pode entrar em contato pelo e-mail oficial do laboratório (lisa.cmpf@ufersa.edu.br), formulário de contato disponível no site ou pelas redes sociais.",
  },
  {
    id: 7,
    Titulo: "O LISA oferece estágio ou oportunidades para alunos?",
    Descricao:
      "Sim. Estudantes regularmente matriculados podem participar como bolsistas ou voluntários em projetos desenvolvidos no laboratório. Mas não ofertamos estágio.",
  },
  {
    id: 8,
    Titulo: "Onde está localizado o LISA?",
    Descricao:
      "O LISA está localizado na Universidade Federal Rural do Semi-Árido (UFERSA), Câmpus Pau dos Ferros, com estrutura voltada a ensino, pesquisa e extensão.",
  },
  {
    id: 9,
    Titulo: "Quais são os objetivos do laboratório?",
    Descricao:
      "O LISA busca promover: inovação tecnológica, capacitação de profissionais e soluções para problemas reais da indústria e sociedade.",
  },
  {
    id: 10,
    Titulo: "Como posso acompanhar as novidades do LISA?",
    Descricao:
      "Siga o LISA no Instagram ou acompanhe as atualizações diretamente pelo site.",
  }
  ];

  return (
    <ThemeProvider>
      <div className="w-full min-h-[781px] flex flex-col items-center gap-16 text-[#1C1D20] dark:text-[#EFECFF] justify-center bg-[#e7e3ff] dark:bg-[#1C1D20] px-4 py-10"
    id="Sobre">
      <div className="text-center">
        <p className="font-[700] text-[40px]">Perguntas Frequentes</p>
        <p className="font-[400] text-[20px] text-[#3F3D56] dark:text-[#CDC5FF]">
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
    </ThemeProvider>
  );
}

export default Sobre;
