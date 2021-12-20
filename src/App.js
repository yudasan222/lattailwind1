//import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SectionKontak from "./components/SectionKontak";
import SectionProfile from "./components/SectionProfile";
import SectionProjects from "./components/SectionProjects";
import SectionSkils from "./components/SectionSkils";
import "./images/hero2.png";

function App() {
  return (
    <>
      <Hero />
      <SectionProfile />
      <SectionSkils />
      <SectionProjects />
      <SectionKontak />
      <Footer />
    </>
  );
}

export default App;
