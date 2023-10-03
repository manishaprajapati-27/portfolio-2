import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../assets/images/hero/hero.png";
import SkewImage from "../../assets/images/hero/skew-hero.png";

const ContactHero = () => {
  return (
    <section className="hero about-hero">
      <div className="hero-image">
        <img src={HeroImage} alt="Contact Hero" />
      </div>
      <motion.div
        className="flip-animate"
        animate={{ x: 0, opacity: 0.6 }}
        initial={{ x: 80, opacity: 0 }}
        transition={{ type: "tween", duration: 1, delay: 0 }}
      >
        <img src={SkewImage} alt="Skew Pattern" />
      </motion.div>
      <div className="text">
        <motion.h5
          className="sub-heading"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 1 }}
        >
          Contact <span></span>
        </motion.h5>
        <motion.h2
          className="heading"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2 }}
        >
          {" "}
          <span>Contact Me</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default ContactHero;
