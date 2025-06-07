import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { aboutImage } from "../../constants/images";

const AboutSection = () => {
  // const [move, setMove] = useState(false);
  const pageStart = () => {
    window.scrollTo(1, 1);
  };

  return (
    <section className="section about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <motion.div className="text" data-aos="fade-right">
              <h5 className="sub-heading mb-1">
                About Me <span></span>
              </h5>
              <h2 className="heading mb-1">
                Web Designer <span>&</span> Front End Developer{" "}
                <span>Based In Thane</span>
              </h2>
              <p className="mb-1">
                I’m a passionate Front-End Developer based in Titwala, with a
                strong interest in creating visually appealing and user-friendly
                web experiences. I love transforming ideas and designs into
                interactive, high-performing websites using modern technologies
                like{" "}
                <b>
                  React.js, JavaScript, HTML5, CSS3, TailwindCSS, and Bootstrap.
                </b>
              </p>
              <p className="mb-1">
                With every project, my goal is to build{" "}
                <b>responsive, accessible, and intuitive interfaces</b> that
                provide the best possible experience to users. I enjoy staying
                updated with the latest trends in front-end development and
                constantly strive to improve my skills and bring fresh, creative
                ideas to the table.
              </p>
              <p className="mb-2">
                Beyond coding, I enjoy designing website layouts, listening to
                music, and exploring development tutorials and creative content
                on YouTube to keep myself inspired and motivated.
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
