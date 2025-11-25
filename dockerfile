# Dockerfile
FROM quay.io/keycloak/keycloak:21.1.1

# 1. Copie du fichier de configuration du realm dans l'image
COPY portfolio-realm.json /opt/keycloak/data/import/

# 2. Keycloak va automatiquement importer tous les .json
# trouvés dans ce dossier au premier démarrage.

# Configuration Render (Proxy, Hostname)
ENV KC_PROXY=edge
ENV KC_HOSTNAME=portfolio-alexis-benoist.onrender.com
# ... autres variables (KC_HTTP_HOST=0.0.0.0, KC_HTTP_PORT=8081, timeouts) ...

# Admin credentials
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=DPDragonfly09#k

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
# On garde start-dev, mais maintenant il va importer le realm au démarrage
CMD ["start-dev"]