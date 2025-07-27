import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import CardsEquipe from "../Componentes/tags/CardsEquipe";
import { ThemeProvider } from "../Context/ThemeContext";

function Equipe() {
  const equipe = [
    {
      Foto: "./segundo.png",
      Nome: "Dr. Francisco Segundo",
      Cargo: "Coordenador",
    },
    {
      Foto: "./reudismam.jpg",
      Nome: "Dr. Reudismam Rolim",
      Cargo: "Vice-Coordenador",
    },
    {
      Foto: "walber2.jpg",
      Nome: "Dr. Walber José",
      Cargo: "Professor e Pesquisador",
    },
    {
      Foto: "samara.png",
      Nome: "Dra. Sâmara Paiva",
      Cargo: "Professor e Pesquisador",
    },
    {
      Foto: "rosana.jpeg",
      Nome: "Dra. Rosana Cibely",
      Cargo: "Professor e Pesquisador",
    },
    {
      Foto: "kennedy.png",
      Nome: "Dr. Kennedy Reurisom",
      Cargo: "Professor e Pesquisador",
    },
    {
      Foto: "felipe_torres2.jpg",
      Nome: "Me. Felipe Torres",
      Cargo: "Professor e Pesquisador",
    },
    {
      Foto: "ferdinandy.png",
      Nome: "Me. Ferdinandy Chagas",
      Cargo: "Professor e Pesquisador",
    },
    {
      Foto: "Joao_Batista.jpg",
      Nome: "Dr. João Batista",
      Cargo: "Professor e Pesquisador",
    },
    {
      Foto: "Geiser.jpg",
      Nome: "Dr. Geiser Chalco",
      Cargo: "Professor e Pesquisador",
    },
     {
      Foto: "Huliane.jpg",
      Nome: "Dra. Huliane Medeiros",
      Cargo: "Professor e Pesquisador",
    },
     {
      Foto: "Petrucio.jpg",
      Nome: "Dr. Petrucio Tavares",
      Cargo: "Professor e Pesquisador",
    },
     {
      Foto: "Pedro.png",
      Nome: "Dr. Pedro Thiago",
      Cargo: "Professor e Pesquisador",
    },
  ];

  return (
    <ThemeProvider>
      <div
      className="w-full h-full bg-[#e7e3ff] dark:bg-[#1C1D20] text-[#1C1D20] dark:text-[#EFECFF] flex flex-col justify-center items-center gap-20 py-8"
      id="Equipe"
    >
      <div className="flex flex-col max-w-[1280px] h-full text-center px-4 gap-4">
        <p className="font-[700] leading-none text-[32px] md:text-[40px]">
          Conheça o time por trás das soluções
        </p>
        <p className="font-[400] md:text-[20px] text-[#3F3D56] dark:text-[#CDC5FF]">
          Profissionais especializados, apaixonados por inovação e comprometidos
          com os resultados do seu negócio. Juntos, unimos expertise técnica e
          visão estratégica para entregar valor real em cada projeto.
        </p>
      </div>
      <div className="w-[90vw] lg:max-w-[1280px] h-[60vh] ">
        <Swiper
          slidesPerView={3}
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
          300: {
            slidesPerView: 1, // 1 item visível
          },
          // Para telas médias (tablet)
          640: {
            slidesPerView: 2, // 2 itens visíveis
          },
          // Para telas grandes (desktop)
          1024: {
            slidesPerView: 3, // 4 itens visíveis
          },
        }}
        >
          {equipe.map((membro, index) => (
            <SwiperSlide key={index}>
              <CardsEquipe Animated={false} {...membro} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </ThemeProvider>
  );
}
export default Equipe;
