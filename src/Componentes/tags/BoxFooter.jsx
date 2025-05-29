export default function InfoCard({ icon, title, description }) {
  return (
    <div className="w-full md:w-[424px] h-[81px] flex justify-center items-center border border-[#5F45FF] rounded-[10px] gap-4 px-2 md:px-0">
      {icon && <img className="w-[40px]" src={icon} alt="Ícone" />}
      <div className="flex flex-col justify-center w-[336px] h-[49px] text-[#E9E9E9]">
        <p className="font-[700] text-[20px]">{title}</p>
        <p className="text-[#CDC5FF] font-[400] text-[16px]">{description}</p>
      </div>
    </div>
  );
}
