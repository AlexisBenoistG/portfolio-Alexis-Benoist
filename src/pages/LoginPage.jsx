import { useAuth } from "../auth/AuthProvider";

export default function LoginPage() {
  const { initialized, authenticated, login } = useAuth();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form className="flex flex-col gap-2.5 max-w-[350px] p-5 rounded-2xl relative bg-gray-900 text-white border border-gray-800 mx-auto">
        <p className="text-2xl font-semibold tracking-tight relative flex items-center pl-8 text-sky-500 before:absolute before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-sky-500 after:absolute after:left-0 after:w-4 after:h-4 after:rounded-full after:bg-sky-500 after:animate-pulse">
          Connexion Keycloak
        </p>

        <p className="text-sm text-white/70 mb-3">Connecte-toi pour accéder aux parties protégées du portfolio.</p>

        {/* Bouton Login Keycloak */}
        <button
          type="button"
          className="mt-2 bg-sky-500 hover:bg-sky-400 text-white text-base py-2 rounded-lg transition-all"
          onClick={() => login()}
        >
          Se connecter
        </button>

        <p className="text-sm text-white/70 mt-2 text-center">
          Pas encore de compte ?{" "}
          <a
            href="#"
            className="text-sky-500 hover:underline"
            onClick={() => login({ action: "register" })}
          >
            S’inscrire
          </a>
        </p>
      </form>
    </main>
  );
}
