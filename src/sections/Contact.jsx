import { motion } from "framer-motion";
import { contactInfo,pageContent } from "../data/contactData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto mt-32 px-6 py-10 
                 bg-card backdrop-blur-md rounded-2xl
                 border border-theme shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-semibold text-primary mb-4">
          {pageContent.title}
        </h1>
        
        <p className="text-secondary leading-relaxed mb-8">
          {pageContent.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.label}
            href={info.href}
            target={info.type === "external" ? "_blank" : undefined}
            rel={info.type === "external" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={info.href!==undefined ? "group relative overflow-hidden rounded-xl border border-theme bg-card/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-card hover:scale-105" : "group relative overflow-hidden rounded-xl border border-theme bg-card/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-card hover:scale-105 cursor-not-allowed"}
          >
            {/* Effet de fond au hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 
                            group-hover:from-blue-600/10 group-hover:to-purple-600/10 
                            transition-all duration-300"></div>
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-card border border-theme
                              flex items-center justify-center text-primary
                              group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-secondary mb-1">
                  {info.label}
                </p>
                <p className="text-primary font-medium truncate group-hover:text-link 
                              transition-colors duration-300">
                  {info.value}
                </p>
              </div>

              {/* Icône de lien externe */}
              {info.type === "external" && (
                <svg 
                  className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 
                   border border-theme text-center"
      >
        <p className="text-secondary text-sm mb-2">
          {pageContent.internship.emoji}{ pageContent.internship.title}
        </p>
        <p className="text-secondary text-xs">
          {pageContent.internship.dates}
        </p>
      </motion.div>
    </section>
  );
}