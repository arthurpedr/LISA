import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import Servicos from "./Servicos/Servicos.jsx";
import Projetos from "./Projetos/Projetos.jsx";
import Projetos2 from "./Projetos/Projetos-2.jsx";
import Equipe from "./Equipe/Equipe.jsx";
import "../src/Componentes/Css/Style.css";
import Sobre from "./Sobre/Sobre.jsx";
import Footer from "./Footer/Footer.jsx";
import FooterTwo from "./Footer/Footer-2.jsx";
import "./App.css"

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <Home />
      <Servicos />
      <Projetos />
      <Projetos2 />
      <Equipe />
      <Sobre />
      <Footer/>
      <FooterTwo />
    </div>
  );
}

export default App;
