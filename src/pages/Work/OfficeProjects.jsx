import React from "react";
import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import {
  Estate,
  Carmel,
  Venue,
  Venus,
  BizMLM,
  Cprompt,
  Drgaikwad,
} from "../../constants/images";

const OfficeProjects = () => {
  //   const pageStart = () => {
  //     window.scrollTo(1, 1);
  //   };

  return (
    <section className="section small-project">
      <div className="container">
        <h5 className="sub-heading mb-1">
          Some Projects <span></span>
        </h5>
        <h2 className="heading mb-2">
          Office <span>Projects</span> By Me
        </h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={Estate} alt="Estate Harbor" />
              </div>
              <div className="text">
                <h3>Estate Harbor</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://estateharbor.com/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={Carmel} alt="Carmel Maritime" />
              </div>
              <div className="text">
                <h3>Carmel Maritime</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://www.carmelmaritime.com/index.html"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={Venue} alt="The Venue" />
              </div>
              <div className="text">
                <h3>The Venue</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://parasightsolutions.com/thevenue/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={Venus} alt="Venus Hospital" />
              </div>
              <div className="text">
                <h3>Venus Hospital</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://parasightsolutions.com/venus-hospital/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={BizMLM} alt="Biz MLM" />
              </div>
              <div className="text">
                <h3>Biz MLM</h3>
                <h5>Website Design & Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://bizmlm.in/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={Cprompt} alt="C Prompt Solutions" />
              </div>
              <div className="text">
                <h3>C Prompt Solutions</h3>
                <h5>Website Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://www.cpromptsolutions.in/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={Drgaikwad} alt="Dr Gaikwad" />
              </div>
              <div className="text">
                <h3>Dr Gaikwad</h3>
                <h5>Website Develope</h5>
                <div className="link-btns">
                  <Link
                    to="https://www.drgaikwad.com/"
                    target="_blank"
                    className="arrow"
                  >
                    <FiLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeProjects;
