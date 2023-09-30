import React from "react";
import Hero from "./Hero";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ProjectSecition from "./ProjectSecition";
import SmallProjectSection from "./SmallProjectSection";

const Home = () => {
  return (
    <motion.div>
      <Hero />
      <AboutSection />
      <ProjectSecition />
      <SmallProjectSection />
    </motion.div>
  );
};

export default Home;
