export default function CardsSocial({ icon, icon2, link, link2, title, description }) {
  return (
    <div className="w-[90vw] md:w-[400px] h-[81px] flex justify-center items-center rounded-[10px] gap-4 bg-[#e7e3ff] dark:bg-[#1C1D20] px-2 border border-[#5F45FF]">
            <div className="flex flex-col justify-center w-[336px] h-[49px] text-[#1C1D20] dark:text-[#E9E9E9] ml-3">
              <p className="font-[700] md:text-[20px]">{title}</p>
              <p className="text-[#3F3D56] dark:text-[#CDC5FF] font-[400] text-[14px] md:text-[16px]">{description}</p>
            </div>
            <div className="flex gap-4 w-[150px]">
              { icon && <a href={link} target="_blanc" rel="noopener noreferrer"><img className="p-1 w-10 rounded-full object-cover bg-[#5F45FF]" src={icon} alt="Ícone"/></a>}
              { icon2 && <a href={link2} target="_blanc" rel="noopener noreferrer"><img className="p-1 w-10 rounded-full object-cover bg-[#5F45FF]" src={icon2} alt="Ícone"/></a>}
            </div>
          </div>
  );
}