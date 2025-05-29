import { motion } from "framer-motion";

export default function InfoCard({ iconSrc, title, description }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}

     className="text-[#EFECFF] bg-[#17181A] w-[400px] h-[262px] flex flex-col justify-center gap-[32px] border-2 border-[#5F45FF] rounded-[10px] px-10 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      {iconSrc && <img className="w-[48px]" src={iconSrc} alt="Ícone" />}
      <div className="flex flex-col justify-center w-[341px] h-[96px]">
        <p className="font-bold text-[24px]">{title}</p>
        <p className="text-[#CDC5FF] font-normal text-[16px]">{description}</p>
      </div>
    </motion.div>
  );
}
