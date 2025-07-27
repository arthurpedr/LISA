import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import LisaRecebe from "./LisaRecebe/LisaRecebe.jsx";
import Servicos from "./Servicos/Servicos.jsx";
import Projetos from "./Projetos/Projetos.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Projetos2 from "./Projetos/Projetos-2.jsx";
import Equipe from "./Equipe/Equipe.jsx";
import Sobre from "./Sobre/Sobre.jsx";
import Footer from "./Footer/Footer.jsx";
import FooterTwo from "./Footer/Footer-2.jsx";
import "./App.css"
import "../src/Componentes/Css/Style.css";

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <Home />
      <LisaRecebe />
      <Servicos />
      <Projetos />
      <Projetos2 />
      {/*Espaço destinado para o portfolio*/}
      <Equipe />
      <Sobre />
      <Footer/>
      <FooterTwo />
    </div>
  );
}

export default App;
