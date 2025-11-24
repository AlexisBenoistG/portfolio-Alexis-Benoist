import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import MyName from "../sections/MyName";

export default function Home() {
  return (
    <>
      <MyName />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
