export default function Footer() {
  return (
    <footer className="footer bg-gray-200 dark:bg-gray-800 text-center p-6 mt-12">
      <p>
        &copy; {new Date().getFullYear()} Portfolio Alexis Benoist. Tous droits réservés.
      </p>
      <div className="socials flex justify-center items-between gap-4 mt-2">
        <a href="https://github.com/AlexisBenoistG" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/alexis-daniel-andre-benoist" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
