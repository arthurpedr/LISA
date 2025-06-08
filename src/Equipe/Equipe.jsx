import CardsEquipe from "../Componentes/tags/CardsEquipe";

function Equipe () {
    return (
        <div className="w-full h-full bg-[#1C1D20] text-[#EFECFF] flex flex-col justify-center items-center gap-20 py-8"
        id="Equipe">
            <div className="flex flex-col max-w-[1280px] h-full text-center px-4 gap-4">
                <p className="font-[700] leading-none text-[32px] md:text-[40px]">Conheça o time por trás das soluções</p>
                <p className="font-[400] md:text-[20px] text-[#CDC5FF]">Profissionais especializados, apaixonados por inovação e comprometidos com os resultados do seu negócio. Juntos, unimos expertise técnica e visão estratégica para entregar valor real em cada projeto.</p>
            </div>
            <div className="max-w-[1280px] grid grid-cols-1 lg:grid-cols-3 gap-4">
                <CardsEquipe 
                Foto={"./segundo.png"}
                Nome={"Dr. Francisco Segundo"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"./reudismam.jpg"}
                Nome={"Dr. Reudismam Rolim"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"walber2.jpg"}
                Nome={"Dsc. Walber Adriano"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"italo.jpg"}
                Nome={"Dr. Ítalo Assis"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"samara.png"}
                Nome={"Dra. Sâmara Paiva"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"rosana.jpeg"}
                Nome={"Dra. Rosana Rego"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"kennedy.png"}
                Nome={"Dr. Kennedy Reurisom"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"felipe_torres2.jpg"}
                Nome={"Msc. Felipe Torres"}
                Cargo={"Professor e Pesquisador"}
                />
                <CardsEquipe 
                Foto={"ferdinandy.png"}
                Nome={"Msc. Ferdinandy Chagas"}
                Cargo={"Professor e Pesquisador"}
                />
            </div>
        </div>
    )
}
export default Equipe;