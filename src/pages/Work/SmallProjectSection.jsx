import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLink } from "react-icons/fi";
import { RealEsate, PortFolio1, Landing } from "../../constants/images";

const SmallProjectSection = () => {
  //   const pageStart = () => {
  //     window.scrollTo(1, 1);
  //   };

  return (
    <section className="section small-project pb-0">
      <div className="container">
        <h5 className="sub-heading mb-1">
          Some Projects <span></span>
        </h5>
        <h2 className="heading mb-2">
          Some More <span>Projects</span> By Me
        </h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={RealEsate} alt="Real Estate" />
              </div>
              <div className="text">
                <h3>Real Estate</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://manishaprajapati-27.github.io/real-estate-webpage/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                  <Link
                    to="https://github.com/manishaprajapati-27/real-estate-webpage.git"
                    className="arrow"
                    target="_blank"
                  >
                    <FiGithub />
                  </Link>
                </div>
                <p className="mt-1">
                  It is a Real Estate Web Page Created by using html, css,
                  boostrap and JavaScript.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={Landing} alt="Landing Page" />
              </div>
              <div className="text">
                <h3>Landing Page</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  {/* <Link to="#" target="_blank" className="arrow">
                    <FiLink />
                  </Link> */}
                  <Link
                    to="https://github.com/manishaprajapati-27/landing-page.git"
                    target="_blank"
                    className="arrow"
                  >
                    <FiGithub />
                  </Link>
                </div>
                <p className="mt-1">
                  It is a Landing page created in html, css and boostrap for
                  practice of design and develop websites.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={PortFolio1} alt="Portfolio 1" />
              </div>
              <div className="text">
                <h3>Portfolio 1</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://manishaprajapati-27.github.io/portfolio-1/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                  <Link
                    to="https://github.com/manishaprajapati-27/portfolio-1.git"
                    target="_blank"
                    className="arrow"
                  >
                    <FiGithub />
                  </Link>
                </div>
                <p className="mt-1">
                  First Portfolio created in Feb 2023. It is a porfolio website
                  develop in HTML, CSS, Bootstrap and JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallProjectSection;
