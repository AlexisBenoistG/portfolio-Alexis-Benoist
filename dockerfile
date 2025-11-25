# Dockerfile
FROM quay.io/keycloak/keycloak:21.1.1

# IMPORTANT: Si tu recrées le realm, tu dois ajouter cette ligne !
# Assure-toi que portfolio-realm.json est dans le même dossier.
# COPY portfolio-realm.json /opt/keycloak/data/import/

# --- CONFIGURATION DU PORT ET DU BINDING ---
# 1. Force Keycloak à écouter sur toutes les interfaces (C'est ÇA qui manquait)
ENV KC_HTTP_HOST=0.0.0.0
# 2. Définit le port d'écoute
ENV KC_HTTP_PORT=8081
# 3. Documente le port ouvert
EXPOSE 8081
# --------------------------------------------

# --- CONFIGURATION DU PROXY (HTTPS) ---
ENV KC_PROXY=edge
ENV KC_HOSTNAME=portfolio-alexis-benoist.onrender.com
ENV KC_HOSTNAME_STRICT=false
ENV KC_HTTP_ENABLED=true
# ----------------------------------------

# --- CONFIGURATION DU TIMEOUT DB (Si le serveur est lent) ---
# Ceci évite que Keycloak déclare le serveur mort trop tôt
ENV KC_DB_POOL_MAX_WAIT_MILLIS=15000 
ENV KC_DB_POOL_INITIAL_SIZE=5 
# ------------------------------------------------------------

# Admin credentials
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=DPDragonfly09#k

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start-dev"]