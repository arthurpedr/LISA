import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Projetos from "../Componentes/tags/Projetos.jsx";
import { ThemeProvider } from "../Context/ThemeContext.jsx";

function Portfolio() {
  const projetos = [
  {
    iconSrc: "./reudismam.jpg",
    title: "Projeto 1",
    description:
      "Tecnologias utilizadas: Node.js, Python, RPA, Automação de Processos Organizacionais.",
  },
  {
    iconSrc: "./reudismam.jpg",
    title: "Projeto 2",
    description:
      "Tecnologias utilizadas: Java, Docker, Kubernetes, Automação de Processos e Otimização de Fluxos.",
  },
  {
    iconSrc: "./reudismam.jpg",
    title: "Projeto 3",
    description:
      "Tecnologias utilizadas: React, Redux, API REST, Integração de Sistemas e Melhoria de Eficiência.",
  },
  {
    iconSrc: "./reudismam.jpg",
    title: "Projeto 4",
    description:
      "Tecnologias utilizadas: JavaScript, Tailwind CSS, DevOps, Monitoramento e Otimização de Processos.",
  },
  {
    iconSrc: "./reudismam.jpg",
    title: "Projeto 5",
    description:
      "Tecnologias utilizadas: MongoDB, Express, Node.js, Arquitetura de Microserviços e Automação de Tarefas.",
  },
];


  return (
    <ThemeProvider>
      <div id="Projetos"
    className="w-full h-full flex flex-col justify-center items-center bg-[#e7e3ff] dark:bg-[#1C1D20] text-[#1C1D20] dark:text-[#EFECFF]">
      <div className="flex flex-col justify-center items-center max-w-[1280px] h-[250px] text-center px-4 gap-4">
        <p className="font-[700] text-[32px] md:text-[40px]">
          Nossos Projetos Inovadores
        </p>
        <p className="text-[#3F3D56] dark:text-[#CDC5FF] font-[400] md:text-[20px]">
          Explore as soluções e inovações que estamos criando para transformar o
          futuro da tecnologia.
        </p>
      </div>
      <div className="max-w-[1280px] hidden gap-4">
        {projetos.map((item, index) => (
          <Projetos
           Animated={true}
            key={index}
            {...item}
             />
        ))}
      </div>

      <div className="max-w-[1280px] h-[90vh]">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full h-full"
          breakpoints={{
          // Para telas pequenas (mobile)
          320: {
            slidesPerView: 1, // 1 item visível
          },
          // Para telas médias (tablet)
          640: {
            slidesPerView: 2, // 2 itens visíveis
          },
          // Para telas grandes (desktop)
          1024: {
            slidesPerView: 4, // 4 itens visíveis
          },
        }}
        >
          {projetos.map((item, index) => (
            <SwiperSlide key={index}>
              <Projetos Animated={false} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </ThemeProvider>
  );
}
export default Portfolio;
