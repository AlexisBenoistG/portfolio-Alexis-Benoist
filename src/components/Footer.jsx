export default function Footer() {
  return (
    <footer
      className="footer mt-20 mb-6 mx-auto w-[90%] max-w-4xl
                 bg-zinc-900/40 backdrop-blur-lg border border-zinc-800
                 rounded-2xl shadow-lg p-6 text-center text-slate-300"
    >
      <p className="text-sm opacity-80">
        &copy; {new Date().getFullYear()} Portfolio Alexis Benoist — Tous droits réservés.
      </p>

      <div className="socials flex justify-center gap-10 mt-4">
        
        <a
          href="https://github.com/AlexisBenoistG"
          target="_blank"
          className="text-slate-200 transition-all duration-300 
                     hover:text-white hover:-translate-y-1"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/alexis-daniel-andre-benoist"
          target="_blank"
          className="text-slate-200 transition-all duration-300 
                     hover:text-white hover:-translate-y-1"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
