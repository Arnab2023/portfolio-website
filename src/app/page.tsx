"use client";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";

import { useState } from "react";

const Home = () => {
  return (
    <main
      className="min-h-screen bg-black/[0.96] antialiased
   bg-grid-white/[0.02] scroll-smooth-[0.3s] max-sm:overflow-x-hidden "
    >
      <section id="home ">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>
      <Experience />
      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="project">
        <FeaturedProjects />
      </section>
    </main>
  );
};

export default Home;
