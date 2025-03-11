import React from "react";
import { motion } from "framer-motion";
import { aboutImage } from "../../constants/images";

const AboutSection = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <motion.div className="text">
              <h5 className="sub-heading mb-1">
                About Me <span></span>
              </h5>
              <h2 className="heading mb-1">
                Designer <span>&</span> Developer <span>Based In Thane</span>
              </h2>
              <p className="mb-1">
                I am a Frontend Developer. I live in Titwala.
              </p>
              <p className="mb-1">
                I like to create new designs for websites. I enjoy working in
                programming languages for developing websites. I try to create
                design for websites that give the best experience to users. My
                goal is to create and develop websites and applications that
                fulfill all requirements of users.

                
              </p>
              <p className="mb-2">
                I also like to listen to songs and watch videos on YouTube.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-image d-flex align-items-center justify-content-center">
              {/* <motion.div
                className="bg-1"
                // animate={{ x: 0, skew: -30 }}
                initial={{ x: 80, skew: -30, opacity: 0 }}
                whileInView={{ x: 0, skew: -30, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4 }}
              ></motion.div> */}
              {/* <motion.div
                className="bg-2"
                // animate={{ x: 0, skew: -30 }}
                initial={{ x: -80, skew: -30, opacity: 0 }}
                whileInView={{ x: 0, skew: -30, opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.1 }}
              ></motion.div> */}
              <motion.div
                className="image"
                // animate={{ scale: 1 }}
                // initial={{ scale: 0, opacity: 0 }}
                // whileInView={{ scale: 1, opacity: 1 }}
                // transition={{ duration: 0.7, delay: 0.7 }}
              >
                <img src={aboutImage} alt="Me Manisha" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
