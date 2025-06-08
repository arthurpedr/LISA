import CardsSocial from "../Componentes/tags/CardsSocial.jsx";

function Footertwo() {
  return (
    <div className="w-full h-full lg:h-[300px] flex flex-col justify-center items-center bg-[#5F45FF] gap-[20px]">
      <div className="flex justify-center items-center gap-[40px] my-9 flex-wrap lg:flex-nowrap">
        <CardsSocial
         title="Pedro Arthur"
         description="Desenvolvidor Front-End"
         link={"https://www.instagram.com/pedro_marrtins/"}
         link2={"https://github.com/arthurpedr"}
         icon="./branco-instagram.svg"
         icon2="./icons8-github.svg"
          />

          <CardsSocial
         title="Ruan"
         description="UX/UI Design"
         icon="./branco-instagram.svg"
         icon2="./icons8-github.svg"
          />

          <CardsSocial
         title="LISA"
         description="Laboratório"
         link={"https://www.instagram.com/lisa.ufersa/"}
         link2={"https://github.com/lisa-ufersa"}
         icon="./branco-instagram.svg"
         icon2="./icons8-github.svg"
          />
      </div>

      <div className="max-md-w-[90vw] overflow-hidden">
        <p className="md:text-[20px] text-[#EFECFF] mb-4">
          &copy; LISA 2025 Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
export default Footertwo;
