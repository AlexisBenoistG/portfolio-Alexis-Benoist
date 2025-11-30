import { motion } from "framer-motion";
import { experiences, qualities, languages, introduction, internshipInfo } from "../data/aboutData";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto mt-32 mb-13 px-6 py-10 
                 bg-card backdrop-blur-md rounded-2xl
                 border border-theme shadow-xl"
    >
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold text-primary mb-4">
          {introduction.title}
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4 mb-8"
      >
        {introduction.paragraphs.map((paragraph, index) => (
          <p key={index} className={`text-secondary leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
            {index === 0 ? (
              <>
                Je suis un{" "}
                <span className="text-primary font-medium">développeur passionné</span>{" "}
                {paragraph.slice(22)}
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </motion.div>

      {/* Qualités */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold text-primary mb-4">Qualités</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl gradient-hover
                         border border-theme hover:border-none
                         transition-all duration-300 hover:scale-105"
            >
              <span className="text-3xl">{quality.icon}</span>
              <span className="text-sm text-secondary text-center">
                {quality.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Langues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold text-primary mb-4">Langues</h3>
        <div className="space-y-4">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span className="text-primary font-medium">{lang.name}</span>
                <span className="text-secondary">{lang.level}</span>
              </div>
              <div className="h-2 bg-card border border-theme rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.percentage}%` }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Parcours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-primary mb-4">Parcours</h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="relative pl-8 pb-6 border-l-2 border-theme last:pb-0"
            >
              {/* Point sur la timeline */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full 
                              bg-gradient-to-r from-blue-600 to-purple-600 
                              border-2 border-card"></div>

              <div className="bg-card/30 border border-theme rounded-xl p-4 
                              hover:bg-card/50 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h4 className="text-primary font-semibold">{exp.title}</h4>
                  <span className="text-xs text-secondary bg-card px-3 py-1 rounded-full border border-theme">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-secondary mb-3 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm text-secondary flex items-start gap-2">
                      <span className="text-link mt-1">•</span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 
                   border border-theme text-center"
      >
        <p className="text-secondary text-sm mb-2">
          {internshipInfo.emoji} {internshipInfo.title}
        </p>
        <p className="text-secondary text-xs">{internshipInfo.dates}</p>
      </motion.div>
    </section>
  );
}