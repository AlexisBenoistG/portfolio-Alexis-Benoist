import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 mt-4">
          <div className="relative rounded-2xl px-4 md:px-6 py-2 shadow-2xl 
                          shadow-slate-900/50 overflow-hidden">
            {/* Effet vitre avec backdrop-blur */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

            {/* Bordure brillante */}
            <div className="absolute inset-0 rounded-2xl border border-white/10"></div>

            {/* Reflets de lumière sur le verre */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                            from-white/10 via-transparent to-transparent"></div>

            {/* Contenu */}
            <div className="relative z-10">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}