import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/portfolio-Alexis-Benoist/" element={<Home />} />
        <Route path="/portfolio-Alexis-Benoist/about" element={<About />} />
        <Route path="/portfolio-Alexis-Benoist/projects" element={<Projects />}/>
        <Route path="/portfolio-Alexis-Benoist/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
