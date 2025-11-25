# Dockerfile
FROM quay.io/keycloak/keycloak:21.1.1

# Configuration Render (Proxy)
ENV KC_PROXY=edge
ENV KC_HOSTNAME=portfolio-alexis-benoist.onrender.com
ENV KC_HOSTNAME_STRICT=false
ENV KC_HTTP_ENABLED=true
ENV KC_HTTP_HOST=0.0.0.0

# --- CONFIGURATION DU PORT 8081 ---
# On dit à Keycloak d'écouter sur le 8081
ENV KC_HTTP_PORT=8081
# On documente que le conteneur ouvre le 8081
EXPOSE 8081
# ----------------------------------
ENV KC_DB_POOL_MAX_WAIT_MILLIS=15000
# S'assurer qu'il y a un pool initial
ENV KC_DB_POOL_INITIAL_SIZE=5

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start-dev"]