import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({ children, requiredRoles = [] }) {
  const { initialized, authenticated, login, hasRole } = useAuth();

  if (!initialized) return null; // or a loader

  // not authenticated -> ask to login
  if (!authenticated) {
    // attempt to login (or redirect to /login)
    login(); // keycloak.login() redirects to Keycloak
    return null;
  }

  // roles check
  if (requiredRoles.length > 0) {
    const hasAll = requiredRoles.every((r) => hasRole(r));
    if (!hasAll) {
      // optionally navigate to a "forbidden" page
      return <Navigate to="/" replace />;
    }
  }

  return children;
}
