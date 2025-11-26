import Button from "./Button.jsx";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="flex items-center gap-1">
      <Button to="/portfolio-Alexis-Benoist/">Accueil</Button>
      <div className="w-px h-8 bg-slate-700 mx-2"></div>
      <Button to="/portfolio-Alexis-Benoist/about">À propos</Button>
      <Button to="/portfolio-Alexis-Benoist/projects">Projets</Button>
      <Button to="/portfolio-Alexis-Benoist/competences">Compétences</Button>
      <div className="w-px h-8 bg-slate-700 mx-2"></div>
      <Button to="/portfolio-Alexis-Benoist/contact">Contact</Button>
      <Button to="/portfolio-Alexis-Benoist/cv">CV</Button>

    </div>
  );
}
