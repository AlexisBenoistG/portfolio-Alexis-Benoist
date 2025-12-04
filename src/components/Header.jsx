import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <nav className="fixed top-0 w-screen z-50">
      <div className="flex h-16 w-screen">
        <div className="relative px-4 md:px-6 py-2 shadow-2xl shadow-slate-900/50 overflow-hidden w-screen">
          {/* Effet vitre avec backdrop-blur */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

          {/* Bordure brillante */}
          <div className="absolute inset-0 border border-white/10"></div>

          {/* Reflets de lumière sur le verre */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>

          {/* Contenu */}
          <div className="relative z-10">
            <Navbar />
          </div>
        </div>
      </div>
    </nav>
  );
}