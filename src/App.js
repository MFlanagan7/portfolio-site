import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
