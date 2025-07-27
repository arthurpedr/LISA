export default function CardsFaq({ Titulo, Descricao, aberto, onToggle }) {
  return (
    <div
      className="text-[#1C1D20] dark:text-[#EFECFF] bg-[#e7e3ff] dark:bg-[#17181A] w-full lg:w-[1280px] border-2 border-[#5F45FF] rounded-[10px] px-6 py-4 cursor-pointer transition-all duration-300 mb-4"
      onClick={onToggle}
    >
      <div className="flex items-center gap-4">
        <img
          src={aberto ? "./Menos.svg" : "./Mais.svg"}
          alt={aberto ? "Ícone de menos" : "Ícone de mais"}
          className="w-[40px] h-[40px]"
        />
        <p className="font-[700] text-[20px]">{Titulo}</p>
      </div>

      {aberto && (
        <div className="mt-3 pl-[32px]">
          <p className="text-[#3F3D56] dark:text-[#CDC5FF] font-[400] text-[16px]">{Descricao}</p>
        </div>
      )}
    </div>
  );
}
