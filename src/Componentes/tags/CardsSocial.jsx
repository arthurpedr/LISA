export default function CardsSocial({ icon, icon2, title, description }) {
  return (
    <div className="max-w-[400px] h-[81px] flex justify-center items-center rounded-[10px] gap-4 bg-[#1C1D20] px-2">
            <div className="flex flex-col justify-center w-[336px] h-[49px] text-[#E9E9E9]">
              <p className="font-[700] text-[20px]">{title}</p>
              <p className="text-[#CDC5FF] font-[400] text-[16px]">{description}</p>
            </div>
            { icon && <img className="w-[40px] h-[40px] rounded-full bg-[#5F45FF]" src={icon} alt="Ícone"/>}
            { icon2 && <img className="w-[40px] h-[40px] rounded-full bg-[#5F45FF]" src={icon2} alt="Ícone"/>}
          </div>
  );
}