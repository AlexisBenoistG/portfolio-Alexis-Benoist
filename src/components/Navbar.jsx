import { Link } from "react-router-dom";
import Button from "./Button.jsx";

export default function Navbar() {
  return (
    <nav className="navbar bg-gray-100 dark:bg-gray-900 p-4 flex justify-between items-center">
      <ul className="hidden md:flex gap-6">
        <Button to="#myName">Accueil</Button>
        <Button to="#about">À propos</Button>
        <Button to="#projects">Projets</Button>
        <Button to="#contact">Contact</Button>
      </ul>
    </nav>
  );
}
