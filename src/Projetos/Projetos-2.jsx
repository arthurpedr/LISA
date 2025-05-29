function Projetostwo() {
    return (
        <div className="w-full h-full md:h-[250px] bg-[#5F45FF] flex justify-center items-center text-[#EFECFF] gap-5 md:gap-[40px] relative flex-wrap py-5">
            <div className="flex flex-col justify-center items-center max-w-[884px] h-[110px] text-center gap-0 md:gap-[16px] px-4">
                <p className="font-[700] text-[25px] md:text-[40px]">Dê o próximo passo rumo ao sucesso!</p>
                <p className="font-[400] text-[14px] md:text-[20px]">Descubra como nossa expertise pode transformar seus resultados. Agende agora uma consultoria gratuita e receba um diagnóstico personalizado.</p>
            </div>
            <button className="max-w-[336px] h-[56px] bg-transparent hover:bg-[#EFECFF] hover:text-[#5F45FF] border-1 rounded-[10px] transitio-all duration-300 cursor-pointer px-2" type="button">Agendar Consultoria</button>
        </div>
    )
}
export default Projetostwo;