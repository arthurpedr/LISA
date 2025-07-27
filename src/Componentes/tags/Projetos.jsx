import { motion } from "framer-motion";

export default function Projetos({ iconSrc, title, description, Animated }) {
  const config = {
    initial:{ opacity: 0, y: 80 },
      whileInView:{ opacity: 1, y: 0 },
      transition:{ duration: 0.6, ease: "easeOut" },
      viewport:{ once: true, amount: 0.2 },
  };

  return (
    <motion.div
    {...(Animated ? config : {})}

     className="text-[#1C1D20] dark:text-[#EFECFF] bg-[#ffffff] dark:bg-[#17181A] w-[90vw] md:w-[40vw] lg:w-[20vw] h-[500px] overflow-hidden flex flex-col gap-[32px] border-2 border-[#5F45FF] rounded-[10px] transition-transform duration-300 ease-in-out hover:shadow-lg shadow-[#5F45FF]/50 group">
      {iconSrc && <img className="w-full" src={iconSrc} alt="Ícone" />}
      <div className="flex flex-col justify-center w-full md:w-[40vw] lg:w-[241px] transition-all duration-300 ease-in-out px-[15px]">
        <p className="font-bold text-[24px]">{title}</p>
        <p className="text-[#3F3D56] dark:text-[#CDC5FF] text-[14px] md:text-[16px]">{description}</p>
      </div>
    </motion.div>
  );
}
