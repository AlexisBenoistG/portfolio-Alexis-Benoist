import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "https://localhost:8080/auth",
  realm: "portfolio",
  clientId: "4db0f3a2d1cbeff4d8e3ff93f116af8c1dbf0d2ff45e55d7a0f7f174f7e3f274",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
