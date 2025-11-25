# Dockerfile
FROM quay.io/keycloak/keycloak:21.1.1

# Défini le mode de démarrage
ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start-dev"]

# Variables d'environnement admin
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=DPDragonfly09#k
