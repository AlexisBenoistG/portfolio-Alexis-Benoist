import Button from "./Button.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar fixed top-0 left-50 right-50 w-30% items-center bg-zinc-900/40 backdrop-blur-lg 
                    border-b border-zinc-800 p-4 flex justify-center z-50 shadow-lg rounded">
      <div className="hidden md:flex gap-6">
        <Button to="/portfolio-Alexis-Benoist/login">Se connecter/S'inscrire</Button>
        <Button to="/portfolio-Alexis-Benoist/">Accueil</Button>
        <Button to="/portfolio-Alexis-Benoist/about">À propos</Button>
        <Button to="/portfolio-Alexis-Benoist/projects">Projets</Button>
        <Button to="/portfolio-Alexis-Benoist/contact">Contact</Button>
      </div>
    </nav>
  );
}
