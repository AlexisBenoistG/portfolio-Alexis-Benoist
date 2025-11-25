# Dockerfile
FROM quay.io/keycloak/keycloak:21.1.1

# 1. Dis à Keycloak qu'il est derrière un proxy (Render edge load balancer)
ENV KC_PROXY=edge
# 2. En prod, désactive le strict hostname si tu as des soucis de redirection interne, 
# ou définis KC_HOSTNAME=https://portfolio-alexis-benoist.onrender.com
ENV KC_HOSTNAME_STRICT=false
ENV KC_HTTP_ENABLED=true

# Admin credentials
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=DPDragonfly09#k

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
# start-dev est ok pour tester, mais en prod "start --optimized" est mieux. 
# Garde start-dev pour l'instant si tu veux accéder à la console admin sans configurer le HTTPS toi-même.
CMD ["start-dev"]