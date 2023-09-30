import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLink } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { RealEsate, PortFolio1, Landing } from "../../constants/images";

const SmallProjectSection = () => {
  const pageStart = () => {
    window.scrollTo(1, 1);
  };

  return (
    <section className="section small-project">
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
                <img src={RealEsate} alt="" />
              </div>
              <div className="text">
                <h3>Real Estate Web Page</h3>
                <h5>Website Design</h5>
                <div className="link-btns">
                  <Link
                    to="https://manishaprajapati-27.github.io/real-estate-webpage/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                  <Link
                    to="https://github.com/ManishaPrajapati-27/real-estate-webpage.git"
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
                <img src={Landing} alt="" />
              </div>
              <div className="text">
                <h3>Landing Page</h3>
                <h5>Website Design</h5>
                <div className="link-btns">
                  {/* <Link to="#" target="_blank" className="arrow">
                    <FiLink />
                  </Link> */}
                  <Link
                    to="https://github.com/ManishaPrajapati-27/landing-page.git"
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
                <img src={PortFolio1} alt="" />
              </div>
              <div className="text">
                <h3>Portfolio 1</h3>
                <h5>Website Design</h5>
                <div className="link-btns">
                  <Link
                    to="https://manishaprajapati-27.github.io/portfolio-1/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                  <Link
                    to="https://github.com/ManishaPrajapati-27/portfolio-1.git"
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

        <Link
          to="/work"
          onClick={pageStart}
          type="button"
          className="button-arrow mt-2"
        >
          <span>See All</span>
          <span className="icon">
            <FaChevronRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SmallProjectSection;
