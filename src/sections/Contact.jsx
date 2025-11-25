import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact max-w-3xl mx-auto mt-32 px-6 py-10 
                        bg-zinc-900/40 backdrop-blur-md rounded-2xl 
                        border border-zinc-700 shadow-xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-semibold text-slate-100 mb-6"
      >
        Retrouvez mes coordonnées :
      </motion.h1>

      <p className="text-slate-300 leading-relaxed mb-4">
        N'hésitez pas à me contacter pour discuter d’un projet, d’une
        collaboration ou d’un poste.
      </p>

      <div className="space-y-2 text-slate-400">
        <p>
          <span className="text-slate-200 font-medium">Email :</span>
          <a href="alexisbenoistpro@gmail.com">Mon émail</a>
        </p>
        <p>
          <span className="text-slate-200 font-medium">LinkedIn :</span>{" "}
          <a href="https://www.linkedin.com/in/alexis-daniel-andre-benoist">
            Mon LinkedIn
          </a>
        </p>
        <p>
          <span className="text-slate-200 font-medium">GitHub :</span>{" "}
          <a href="github.com/AlexisBenoistG">Mon GitHub</a>
        </p>
      </div>
    </section>
  );
}
