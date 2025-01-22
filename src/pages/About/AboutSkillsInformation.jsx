import React from "react";
import { FiBook } from "react-icons/fi";
import { Link } from "react-scroll";
import {
  html,
  css,
  js,
  figma,
  bootstrap,
  react,
  sass,
  tailwind,
  gsap,
} from "../../constants/images";

const AboutSkillsInformation = () => {
  return (
    <section className="section skills-info">
      <div className="container">
        <div className="information">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="info-links">
                <li>
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    className="tab-links"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="experience" spy={true} className="tab-links">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="skills" spy={true} className="tab-links">
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="about-info" id="education">
                <h2 className="heading text-primary mb-2">Education</h2>
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>2019-2022</h5>
                      <h4>Bachelor of Science in Information Technology</h4>
                      <h6>Guru Nanak College</h6>
                      <p>
                        I completed my graduation in BSCIT from Guru Nanak
                        College of GTB Nagar in the year 2022.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>2017-2019</h5>
                      <h4>Science Stream</h4>
                      <h6>Guru Nanak Khalsa College</h6>
                      <p>
                        After completing my SSC exam I study at Guru Nanak
                        Khalsa College of Matunga and completed my HSC.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
              <div className="about-info" id="experience">
                <h2 className="heading text-primary mb-2">Experience</h2>
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>January 2024 - Present</h5>
                      <h4>DiigiiHost</h4>
                      <p>
                        Managed website maintenance and front-end development to
                        ensure seamless user experiences, collaborated with
                        senior executives to strategize and achieve project
                        goals, led team discussions, delegated tasks, and acted
                        as the primary point of contact for front-end
                        development and cross-functional coordination to ensure
                        timely project delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>June 2023 - January 2024</h5>
                      <h4>Biz Technology IT Solutions Limited</h4>
                      <p>
                        My Job Role in this company is Web designer and
                        developer. In this company, I create websites. I
                        maintain and build websites and dashboards according to
                        the client's requirements. I Collaborate with backend
                        developers and develop designs.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>September 2022 - June 2023</h5>
                      <h4>Parasight Solutions</h4>
                      <p>
                        It was my first job as a Website Designer. In this
                        company, I learned some new tools. My work in this
                        company was to create layouts in Figma and Develop them
                        into HTML, CSS, and JS. I also collaborated with backend
                        developers to develop and maintain designs.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
              <div className="about-info" id="skills">
                <h2 className="heading text-primary mb-2">Skills</h2>
                <div className="skills-logo">
                  <div className="image">
                    <img src={html} alt="HTML" title="HTML" />
                  </div>
                  <div className="image">
                    <img src={css} alt="CSS" title="CSS" />
                  </div>
                  <div className="image">
                    <img src={js} alt="JavaScript" title="JavaScript" />
                  </div>
                  <div className="image">
                    <img src={sass} alt="SASS" title="SASS" />
                  </div>
                  <div className="image">
                    <img src={figma} alt="Figma" title="Figma" />
                  </div>
                  {/* <img src={python} alt="Python" title="Python" /> */}
                  {/* <img src={django} alt="Django" title="Django" /> */}
                  <div className="image">
                    <img src={react} alt="React" title="React" />
                  </div>
                  <div className="image">
                    <img src={bootstrap} alt="Boostrap" title="Boostrap" />
                  </div>
                  <div className="image">
                    <img
                      src={tailwind}
                      alt="Tailwind CSS"
                      title="Tailwind CSS"
                    />
                  </div>
                  <div className="image">
                    <img src={gsap} alt="GSAP" title="GSAP" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkillsInformation;
