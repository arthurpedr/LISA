import CardsSocial from "../Componentes/tags/CardsSocial.jsx";

function Footertwo() {
  return (
    <div className="w-full h-full lg:h-[300px] flex flex-col justify-center items-center bg-[#5F45FF] gap-[20px]">
      <div className="flex justify-center items-center gap-[40px] my-9 flex-wrap lg:flex-nowrap">
        <CardsSocial
         title="Pedro Arthur"
         description="Desenvolvidor Front-End"
         icon="./branco-instagram.svg"
         icon2="./icons8-github.svg"
          />

          <CardsSocial
         title="Ruan"
         description="UX/UI Design"
         icon="./branco-instagram.svg"
         icon2="./icons8-github.svg"
          />
      </div>

      <div>
        <p className="text-[20px] text-[#EFECFF]">
          &copy; 2025 Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
export default Footertwo;
