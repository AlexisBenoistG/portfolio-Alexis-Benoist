import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/portfolio-Alexis-Benoist/" element={<Home />} />
        <Route path="/portfolio-Alexis-Benoist/login" element={<LoginPage />} />
        <Route path="/portfolio-Alexis-Benoist/about" element={<About />} />
        <Route
          path="/portfolio-Alexis-Benoist/projects"
          element={<Projects />}
        />
        {/* <Route
            path="/portfolio-Alexis-Benoist/projects"
            element={
              <ProtectedRoute requiredRoles={["ROLE_USER"]}>
                <Projects />
              </ProtectedRoute>
            }
          /> */}

        <AuthProvider>
          <Route
            path="/portfolio-Alexis-Benoist/contact"
            element={<Contact />}
          />
        </AuthProvider>
        {/* <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRoles={["ROLE_ADMIN"]}>
                <AdminPage />
              </ProtectedRoute>
            }
          /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
