import { motion } from "framer-motion";

export default function InfoCard({ iconSrc, title, description, Animated }) {
  const config = {
    initial:{ opacity: 0, y: 80 },
      whileInView:{ opacity: 1, y: 0 },
      transition:{ duration: 0.6, ease: "easeOut" },
      viewport:{ once: true, amount: 0.2 },
  };

  return (
    <motion.div
    {...(Animated ? config : {})}

     className="text-[#1C1D20] dark:text-[#EFECFF] bg-[#ffffff] dark:bg-[#17181A] w-[90vw] md:w-[400px] h-full overflow-hidden flex flex-col justify-center gap-[32px] border-2 border-[#5F45FF] rounded-[10px] p-5 md:px-10 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-[#5F45FF]/50">
      {iconSrc && <img className="w-[48px]" src={iconSrc} alt="Ícone" />}
      <div className="flex flex-col justify-center w-[80vw] md:w-[341px]">
        <p className="font-bold text-[24px]">{title}</p>
        <p className="text-[#3F3D56] dark:text-[#CDC5FF] text-[14px] md:text-[16px]">{description}</p>
      </div>
    </motion.div>
  );
}
