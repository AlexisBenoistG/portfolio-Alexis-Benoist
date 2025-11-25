# Dockerfile pour Keycloak
FROM quay.io/keycloak/keycloak:21.1.1

# Mettre en mode dev
CMD ["start-dev"]

# Optionnel : exposer le port 8080 (par défaut Keycloak)
EXPOSE 8080
