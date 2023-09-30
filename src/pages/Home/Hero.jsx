import React from "react";
import { motion } from "framer-motion";
import { heroImage, skewImage } from "../../constants/images";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} />
      </div>
      {/* <div className="patterns">
        <motion.div
          className="quadrilateral-1"
          animate={{ x: -5, y: -20, rotate: 4, opacity: 1 }}
          initial={{ x: 70, y: -20, rotate: 4, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2 }}
        >
          <img src={Quadrilateral1} />
        </motion.div>
        <motion.div
          className="quadrilateral-2"
          animate={{ x: 35, y: -20, rotate: 4, opacity: 1 }}
          initial={{ x: -70, y: 0, rotate: 4, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 3 }}
        >
          <img src={Quadrilateral2} />
        </motion.div>
      </div> */}
      <motion.div
        className="flip-animate"
        animate={{ x: 0, opacity: 0.6 }}
        initial={{ x: 80, opacity: 0 }}
        transition={{ type: "tween", duration: 1, delay: 1 }}
      >
        <img src={skewImage} />
      </motion.div>
      <div className="text">
        <motion.h5
          className="sub-heading"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2 }}
        >
          Hello I am <span></span>
        </motion.h5>
        <motion.h2
          className="heading"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 3 }}
        >
          {" "}
          <span>Manisha Prajapati Web Designer & Developer</span>
          {/* <motion.span
                className="first-head"
                animate={{ scale: 1.5, y: 10, opacity: 1 }}
                initial={{ scale: 0, y: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 4 }}
              >
                Creative Website Designer <br />
                <br />
              </motion.span>
              <motion.span
                animate={{ scale: 1.5, opacity: 1 }}
                initial={{ scale: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 5 }}
              >
                Front End Developer
              </motion.span> */}
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
