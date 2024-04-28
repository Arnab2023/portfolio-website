import About from "@/components/About";
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
      <Skills/>
      <FeaturedProjects />
    </main>
  );
};

export default Home;
