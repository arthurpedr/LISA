import { motion } from "framer-motion";

export default function CardsEquipe({ Foto, Nome, Cargo }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
     className="text-[#EFECFF] bg-[#17181A] w-[90vw] md:w-[400px] h-[400px] flex flex-col border-2 border-[#5F45FF] rounded-[10px] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-[#5F45FF]/50">
      {Foto && (
        <img
          className="w-full h-[80%] object-cover object-center"
          src={Foto}
          alt={Nome}
        />
      )}
      <div className="flex justify-between items-center w-full h-full px-4">
        <div className="flex flex-col justify-center">
          <p className="font-[700] text-[20px] md:text-[24px]">{Nome}</p>
          <p className="text-[#CDC5FF] font-[400] text-[16px]">{Cargo}</p>
        </div>
        <div>
          <img
            className="w-[] md:w-[56px]"
            src="./CaixaEmail.svg"
            alt="Ícone de contato por e-mail"
          />
        </div>
      </div>
    </motion.div>
  );
}
