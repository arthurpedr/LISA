import CardsEquipe from "../Componentes/tags/CardsEquipe";

function Equipe () {
    return (
        <div className="w-full h-full lg:h-[1178px] bg-[#1C1D20] text-[#EFECFF] flex flex-col justify-center items-center gap-45 md:gap-20"
        id="Equipe">
            <div className="flex flex-col max-w-[1280px] h-[110px] text-center">
                <p className="font-[700] text-[40px]">Conheça o time por trás das soluções</p>
                <p className="font-[400] text-[20px] text-[#CDC5FF]">Profissionais especializados, apaixonados por inovação e comprometidos com os resultados do seu negócio. Juntos, unimos expertise técnica e visão estratégica para entregar valor real em cada projeto.</p>
            </div>
            <div className="max-w-[1280px] grid grid-cols-1 lg:grid-cols-3 gap-4">
                <CardsEquipe 
                Foto={"https://images.unsplash.com/photo-1502685104226-ee32379fefbe"}
                Nome={"Lucas Oliveira"}
                Cargo={"Desenvolvedor Frontend"}
                />
                <CardsEquipe 
                Foto={"https://images.unsplash.com/photo-1502685104226-ee32379fefbe"}
                Nome={"Lucas Oliveira"}
                Cargo={"Desenvolvedor Frontend"}
                />
                <CardsEquipe 
                Foto={"https://images.unsplash.com/photo-1502685104226-ee32379fefbe"}
                Nome={"Lucas Oliveira"}
                Cargo={"Desenvolvedor Frontend"}
                />
                <CardsEquipe 
                Foto={"https://images.unsplash.com/photo-1502685104226-ee32379fefbe"}
                Nome={"Lucas Oliveira"}
                Cargo={"Desenvolvedor Frontend"}
                />
                <CardsEquipe 
                Foto={"https://images.unsplash.com/photo-1502685104226-ee32379fefbe"}
                Nome={"Lucas Oliveira"}
                Cargo={"Desenvolvedor Frontend"}
                />
                <CardsEquipe 
                Foto={"https://images.unsplash.com/photo-1502685104226-ee32379fefbe"}
                Nome={"Lucas Oliveira"}
                Cargo={"Desenvolvedor Frontend"}
                />
            </div>
        </div>
    )
}
export default Equipe;