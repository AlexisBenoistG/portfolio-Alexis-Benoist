import { motion } from "framer-motion";
import { useState } from "react";
import { projects, pageContent } from "../data/projectsData";

function ProjectCard({ project, index }) {
  const [showMedia, setShowMedia] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  // Déterminer si media est un tableau ou un objet unique
  const mediaArray = Array.isArray(project.media) ? project.media : [project.media];
  const currentMedia = mediaArray[currentMediaIndex];
  const hasMultipleMedia = mediaArray.length > 1;

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev === 0 ? mediaArray.length - 1 : prev - 1));
    setShowMedia(false);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev === mediaArray.length - 1 ? 0 : prev + 1));
    setShowMedia(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="gradient-hover border border-theme rounded-2xl overflow-hidden
                 hover:border-white/20 transition-all duration-300"
    >
      {/* Image/Vidéo preview */}
      <div className="relative h-48 bg-slate-900/50 overflow-hidden group cursor-pointer"
           onClick={() => setShowMedia(!showMedia)}>
        {currentMedia.type === "video" ? (
          showMedia ? (
            <video
              src={currentMedia.url}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={currentMedia.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )
        ) : (
          <img
            src={currentMedia.url}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Flèches de navigation (uniquement si plusieurs médias) */}
        {hasMultipleMedia && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                         text-white rounded-full p-2 transition-all duration-200 opacity-0 
                         group-hover:opacity-100"
              aria-label="Média précédent"
            >
              <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                         text-white rounded-full p-2 transition-all duration-200 opacity-0 
                         group-hover:opacity-100"
              aria-label="Média suivant"
            >
              <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicateurs de position */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {mediaArray.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentMediaIndex(idx);
                    setShowMedia(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 
                             ${idx === currentMediaIndex 
                               ? 'bg-white w-6' 
                               : 'bg-white/50 hover:bg-white/75'}`}
                  aria-label={`Aller au média ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs border border-theme
                           ${project.status === 'in-progress' ? 'bg-blue-600/20 text-blue-400' : 
                             'bg-green-600/20 text-green-400'}`}>
            {pageContent.status[project.status]}
          </span>
        </div>

        <p className="text-xs text-secondary mb-2">{project.period}</p>
        <p className="text-secondary text-sm mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0,project.technologies.length).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-card border border-theme rounded-lg text-xs text-secondary">
              {tech}
            </span>
          ))}
        </div>

        {/* Points clés */}
        <ul className="space-y-1">
          {project.highlights.slice(0, 2).map((highlight, i) => (
            <li key={i} className="text-xs text-secondary flex items-start gap-2">
              <span className="text-link mt-1">•</span>
              <span className="flex-1">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto mt-32 mb-40 px-6 py-10 bg-card backdrop-blur-md 
                 rounded-2xl border border-theme shadow-xl"    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold text-primary mb-4">
          {pageContent.title}
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
      </motion.div>

      <p className="text-secondary mb-8">{pageContent.description}</p>

      {/* Filtres */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.entries(pageContent.categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer 
                       ${filter === key 
                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                         : 'bg-card border border-theme text-secondary hover:border-white/20'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary">Aucun projet dans cette catégorie pour le moment.</p>
        </div>
      )}
    </section>
  );
}
