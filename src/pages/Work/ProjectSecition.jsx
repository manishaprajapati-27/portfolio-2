import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLink } from "react-icons/fi";
import {
  IceCreamShop,
  KidsZone,
  Dashboard,
  EcommerceWeb,
  GameSky,
  MusicPlayer,
} from "../../constants/images";

const ProjectSecition = () => {
  return (
    <section className="section project pb-0">
      <div className="container">
        <h5 className="sub-heading mb-1">
          Some Projects <span></span>
        </h5>
        <h2 className="heading mb-2">
          Personal <span>Projects</span> Build <span>By Me</span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="project-info">
              <div className="image">
                <img src={IceCreamShop} alt="Ice Cream Shop" />
              </div>
              <div className="text">
                <h4>Ice Cream Shop</h4>
                <p className="mb-1">
                  Ice Cream Shop Website is a simple shop website. In this
                  project, users can see the range of ice cream and the
                  Different Qualities of ice cream.
                </p>
                <div className="d-flex justify-content-between">
                  <div className="tech-use">
                    <span>Boostrap</span>
                    <span>Django</span>
                    <span>Html</span>
                    <span>Css</span>
                  </div>
                  <div className="tech-use">
                    <span>
                      <Link
                        to="https://github.com/manishaprajapati-27/ice-cream-shop.git"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </span>
                    {/* <span>
                      <Link to="#" target="_blank">
                        <FiLink />
                      </Link>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="project-info">
              <div className="image">
                <img src={Dashboard} alt="Dashboard" />
              </div>
              <div className="text">
                <h4>Dashboard</h4>
                <p className="mb-1">
                  Dashboard created for the practice of SCSS. I created this
                  from scratch using HTML, SCSS, JS & using parcel in node.js
                </p>
                <div className="d-flex justify-content-between">
                  <div className="tech-use">
                    <span>Html</span>
                    <span>Scss</span>
                    <span>JavaScript</span>
                    <span>Parcel</span>
                  </div>
                  <div className="tech-use">
                    <span>
                      <Link
                        to="https://github.com/manishaprajapati-27/dashboard.git"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </span>
                    {/* <span>
                      <Link to="#" target="_blank">
                        <FiLink />
                      </Link>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="project-info">
              <div className="image">
                <img src={EcommerceWeb} alt="Ecommerce Website" />
              </div>
              <div className="text">
                <h4>Ecommerce Website</h4>
                <p className="mb-1">
                  It is a Grocery shop e-commerce app. In this project, the
                  admin adds products from the admin panel & user sees products
                  and adds our products to the cart.
                </p>
                <div className="d-flex justify-content-between">
                  <div className="tech-use">
                    <span>Boostrap</span>
                    <span>Django</span>
                    <span>Html</span>
                    <span>Css</span>
                  </div>
                  <div className="tech-use">
                    <span>
                      <Link
                        to="https://github.com/manishaprajapati-27/ecommerce-app-django.git"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="project-info">
              <div className="image">
                <img src={KidsZone} alt="Kids School" />
              </div>
              <div className="text">
                <h4>Kids Zone</h4>
                <p className="mb-1">
                  It is a simple HTML page. Design to practice of HTML & CSS.
                </p>
                <div className="d-flex justify-content-between">
                  <div className="tech-use">
                    <span>Html</span>
                    <span>Css</span>
                  </div>
                  <div className="tech-use">
                    <span>
                      <Link
                        to="https://github.com/manishaprajapati-27/kids-school.git"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </span>
                    <span>
                      <Link
                        to="https://manishaprajapati-27.github.io/kids-school/"
                        target="_blank"
                      >
                        <FiLink />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="project-info">
              <div className="image">
                <img src={GameSky} alt="Game Sky" />
              </div>
              <div className="text">
                <h4>Game Sky</h4>
                <p className="mb-1">
                  It's a website page that gives the game information like
                  Upcomming Games, Popular Games & New Games. Also gives the
                  game details using the rawg api.
                </p>
                <div className="d-flex justify-content-between">
                  <div className="tech-use">
                    <span>React Js</span>
                    <span>JSX</span>
                    <span>Styled Components</span>
                  </div>
                  <div className="tech-use">
                    <span>
                      <Link
                        to="https://github.com/manishaprajapati-27/game-sky.git"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </span>
                    {/* <span>
                      <Link to="#" target="_blank">
                        <FiLink />
                      </Link>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="project-info">
              <div className="image">
                <img src={MusicPlayer} alt="Music Player" />
              </div>
              <div className="text">
                <h4>Music Player</h4>
                <p className="mb-1">
                  It's the React Music Player. In this, we can listen to some
                  chill hop music. It is made in React JS and SASS. I made this
                  when I learned React JS.
                </p>
                <div className="d-flex justify-content-between">
                  <div className="tech-use">
                    <span>React Js</span>
                    <span>JSX</span>
                    <span>SASS</span>
                  </div>
                  <div className="tech-use">
                    <span>
                      <Link
                        to="https://github.com/manishaprajapati-27/music-player-react.git"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </span>
                    <span>
                      <Link
                        to="https://manishaprajapati-27.github.io/music-player-react/"
                        target="_blank"
                      >
                        <FiLink />
                      </Link>
                    </span>
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

export default ProjectSecition;
