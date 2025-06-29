import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import InfoCard from "../Componentes/tags/Cards.jsx";

function Serviços() {
  const servicos = [
    {
      iconSrc: "./01.svg",
      title: "Automação de Processos",
      description:
        "Automações dos processos organizacionais, bem como treinamentos e otimização de processos para melhoria de eficiência em órgãos públicos e empresas privadas.",
    },
    {
      iconSrc: "./02.svg",
      title: "Inteligência Artificial",
      description:
        "Integração de inteligência artificial a processos organizacionais ou ferramentas corporativas para melhoria de processos ou desenvolvimento de novas soluções.",
    },
    {
      iconSrc: "./03.svg",
      title: "Capacitação",
      description:
        "Oferecemos capacitações direcionadas para formação ou atualização de profissionais que exercem atividades dentro das nossas especialidades.",
    },
    {
      iconSrc: "./04.svg",
      title: "Desenvolvimento Web",
      description:
        "Desenvolvimento de aplicações web ou mobile para atender/oferecer serviços específicos para clientes ou colaboradores.",
    },
    {
      iconSrc: "./05.svg",
      title: "Migração para Nuvem",
      description:
        "Serviço de suporte de migração para Nuvem AWS de sistemas existentes visando escalabilidade, segurança e implantação de novas funcionalidades.",
    },
    {
      iconSrc: "./06.svg",
      title: "Automação Industrial",
      description:
        "Desenvolvimento ou melhoria de mecanismos de automação industrial para diversos setores como agrícola, hospitalar, comercial, etc.",
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full lg:h-[894px] bg-[#1C1D20] text-[#EFECFF] gap-10"
      id="Serviços"
    >
      <div className="flex flex-col max-w-[1280px] h-full text-center px-4 gap-4">
        <p className="font-[700] text-[32px] md:text-[40px]">
          Como podemos te ajudar
        </p>
        <p className="text-[#CDC5FF] font-[400] md:text-[20px]">
          Nossas pesquisas e projetos visam melhorar a eficiência, qualidade e
          segurança de processos em diversas áreas, por meio da aplicação de
          técnicas de automação e tecnologias avançadas.
        </p>
      </div>
      <div className="max-w-[1280px] max-md:hidden grid grid-cols-1 lg:grid-cols-3 gap-4">
        {servicos.map((item, index) => (
          <InfoCard
          Animated={true}
          key={index}
           {...item}
           />
        ))}
      </div>

      <div className="w-[90vw] md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="md:hidden w-full h-full"
        >
          {servicos.map((item, index) => (
            <SwiperSlide key={index}>
              <InfoCard Animated={false} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Serviços;
