// AuthProvider.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import keycloak from "./keycloak";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [kc, setKc] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const initRef = useRef(false); // ✅ ref pour init une seule fois

  useEffect(() => {
    if (initRef.current) return; // déjà initialisé
    initRef.current = true;

    keycloak
      .init({
        onLoad: "login-required", // force la connexion, pas de check-sso
        pkceMethod: "S256",
        promiseType: "native",
      })
      .then((auth) => {
        setKc(keycloak);
        setAuthenticated(auth);
        setInitialized(true);

        const refreshInterval = setInterval(() => {
          if (!keycloak.token) return;
          keycloak
            .updateToken(60)
            .catch(() => console.warn("Failed to refresh token"));
        }, 50 * 1000);

        return () => clearInterval(refreshInterval);
      })
      .catch((err) => {
        console.error("Keycloak init error", err);
        setInitialized(true);
      });
  }, []);

  const login = (options) => keycloak.login(options);
  const logout = (options) => keycloak.logout(options);
  const getToken = () => keycloak.token;
  const hasRole = (role) => {
    if (!keycloak?.tokenParsed) return false;
    const realmRoles = keycloak.tokenParsed?.realm_access?.roles || [];
    const resourceRoles = Object.values(
      keycloak.tokenParsed?.resource_access || {}
    ).flatMap((r) => r.roles || []);
    return realmRoles.includes(role) || resourceRoles.includes(role);
  };

  return (
    <AuthContext.Provider
      value={{
        keycloak: kc,
        initialized,
        authenticated,
        login,
        logout,
        getToken,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
