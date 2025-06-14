import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 0) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear o scroll quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      ref={headerRef}
      id="main-header"
      className="fixed w-full flex justify-center top-0 left-0 text-[#F2F2F2] font-bold z-50 transition-all duration-300"
    >
      <div className="flex max-lg:w-[90vw] w-[1280px] items-center justify-between py-4">
        {/* Logo */}
        <img className="w-[115px] h-[48px]" src="./Logo.svg" alt="logo lisa" />

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-x">
          <ul className="flex items-center gap-8">
            <li>
              <a className="underline-hover" href="#Home">Home</a>
            </li>
            <li>
              <a className="underline-hover" href="#Serviços">Serviços</a>
            </li>
            <li>
              <a className="underline-hover" href="#Projetos">Projetos</a>
            </li>
            <li>
              <a className="underline-hover" href="#Equipe">Equipe</a>
            </li>
            <li>
              <a className="underline-hover" href="#Sobre">Sobre</a>
            </li>
            <li>
              <a className="underline-hover" href="#Contato">Contato</a>
            </li>
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
          className="md:hidden right-0 z-[60]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className="menuanimation" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#0A0A0A]/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center text-lg font-semibold transition-all duration-300">
          <ul className="flex flex-col items-center justify-center gap-6">
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Home">Home</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Serviços">Serviços</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Projetos">Projetos</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Sobre">Sobre</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Equipe">Equipe</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Contato">Contato</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
