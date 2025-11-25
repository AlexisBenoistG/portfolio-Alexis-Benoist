import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "https://portfolio-alexis-benoist.onrender.com",
  realm: "portfolio",
  clientId: "Alexis",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
