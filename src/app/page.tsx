import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main
      className="min-h-screen bg-black/[0.96] antialiased
   bg-grid-white/[0.02]"
    >
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Education />
      <FeaturedProjects />
    </main>
  );
};

export default Home;
