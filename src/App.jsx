import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import CompetencesPage from "./sections/Competences";
import CVPage from "./pages/CV";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/portfolio-Alexis-Benoist/" element={<HomePage />} />
            <Route path="/portfolio-Alexis-Benoist/about" element={<AboutPage />} />
            <Route path="/portfolio-Alexis-Benoist/projects" element={<ProjectsPage />}/>
            <Route path="/portfolio-Alexis-Benoist/competences" element={<CompetencesPage />}/>
            <Route path="/portfolio-Alexis-Benoist/contact" element={<ContactPage />}/>
            <Route path="/portfolio-Alexis-Benoist/cv" element={<CVPage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;