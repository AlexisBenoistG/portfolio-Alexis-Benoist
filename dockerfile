# Dockerfile
FROM quay.io/keycloak/keycloak:21.1.1

# 2. Keycloak va automatiquement importer tous les .json
# trouvés dans ce dossier au premier démarrage.

# Configuration Render (Proxy, Hostname)
ENV KC_PROXY=edge
ENV KC_HOSTNAME=portfolio-alexis-benoist.onrender.com
ENV KC_HOSTNAME_STRICT=false
ENV KC_HTTP_ENABLED=true

# --- CONFIGURATION DU PORT 8081 ---
# On dit à Keycloak d'écouter sur le 8081
ENV KC_HTTP_PORT=8081
# On documente que le conteneur ouvre le 8081
EXPOSE 8081

# Admin credentials
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=DPDragonfly09#k

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
# On garde start-dev, mais maintenant il va importer le realm au démarrage
CMD ["start-dev"]