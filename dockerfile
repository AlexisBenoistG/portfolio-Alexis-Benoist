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

# Admin credentials
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=DPDragonfly09#k

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start-dev"]