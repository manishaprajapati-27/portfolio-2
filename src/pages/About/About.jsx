import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";
import AboutHero from "./AboutHero";
import AboutSection from "./AboutSection";
import AboutSkillsInformation from "./AboutSkillsInformation";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    // <LayoutGroup>
    <div
    // layout
    // animate={{ opacity: 0.5 }}
    // transition={{
    //   opacity: { ease: "linear" },
    //   layout: { duration: 0.3 },
    // }}
    // layoutScroll
    // style={{ height: isOpen ? "100px" : "500px" }}
    // onClick={() => setOpen(!isOpen)}
    >
      <AboutHero />
      <AboutSection />
      <AboutSkillsInformation />
    </div>
    // </LayoutGroup>
  );
};

export default Home;
