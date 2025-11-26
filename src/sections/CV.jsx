import { motion } from "framer-motion";
import { useState } from "react";

export default function CV() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const cvPath = "/portfolio-Alexis-Benoist/CV%20Alexis%20Benoist.pdf";

  const handleFullscreen = () => {
    const iframe = document.getElementById("cv-iframe");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = cvPath;
//     link.download = "CV_Alexis_Benoist.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

  return (
    <section
      id="cv"
      className="max-w-5xl mx-auto mt-32 px-6 py-10 mb-30
                 bg-card backdrop-blur-md rounded-2xl
                 border border-theme shadow-xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-semibold text-primary mb-6"
      >
        Mon CV
      </motion.h1>

      <p className="text-secondary leading-relaxed mb-6">
        Consultez mon curriculum vitae ci-dessous. Vous pouvez le visualiser en plein écran ou le télécharger.
      </p>

      {/* Boutons d'action */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={handleFullscreen}
          className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-theme
                     rounded-2xl text-primary hover:bg-white/10 transition-all duration-300
                     hover:scale-105 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          Plein écran
        </button>

        {/* <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-theme
                     rounded-2xl text-primary hover:bg-white/10 transition-all duration-300
                     hover:scale-105 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Télécharger
        </button> */}

        
         <a href={cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-theme
                     rounded-2xl text-primary hover:bg-white/10 transition-all duration-300
                     hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Ouvrir dans un nouvel onglet
        </a>
      </div>

      {/* Visionneuse PDF */}
      <div className="relative w-full rounded-lg overflow-hidden border border-theme shadow-lg">
        <iframe
          id="cv-iframe"
          src={cvPath}
          className="w-full h-[600px] md:h-[800px]"
          title="CV Alexis Benoist"
        />
      </div>
    </section>
  );
}