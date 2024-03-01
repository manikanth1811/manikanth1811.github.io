import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Timeline from "./Timeline";
import SkillSection from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className={`w-[100vw] h-[100vh] flex-col overflow-x-hidden`}>
      <Navbar />
      <Hero />
      <SkillSection />
      <Timeline />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
