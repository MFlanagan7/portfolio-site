import React, { lazy, Suspense } from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import BlogSection from "./components/BlogSection";
// import AboutSection from "./components/AboutSection";
// import ContactSection from "./components/ContactSection";
// import ProjectsSection from "./components/ProjectsSection";
// import SpinLoader from "./components/SpinLoader";

const HeroSection = lazy(() => import("./components/HeroSection"));
const Navbar = lazy(() => import("./components/Navbar"));
const BlogSection = lazy(() => import("./components/BlogSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));

const SpinLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="App">
      <Suspense fallback={<SpinLoader />}>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </Suspense>
    </div>
  );
}

export default App;
