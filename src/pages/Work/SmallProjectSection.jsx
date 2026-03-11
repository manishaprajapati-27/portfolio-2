import { Link } from "react-router-dom";
import { FiGithub, FiLink } from "react-icons/fi";
import { RealEsate, PortFolio1, Landing } from "../../constants/images";

const SmallProjectSection = () => {
  const smallProjects = [
    {
      id: 1,
      title: "Real Estate",
      subTitle: "Website Design & Development",
      image: RealEsate,
      link: "https://manishaprajapati-27.github.io/real-estate-webpage",
      github: "https://github.com/manishaprajapati-27/real-estate-webpage.git",
      description:
        "Converted Figma design into a responsive website using HTML, CSS, JavaScript, Bootstrap, and GSAP.",
    },
    {
      id: 2,
      title: "Landing Page",
      subTitle: "Website Design & Development",
      image: Landing,
      github: "https://github.com/manishaprajapati-27/landing-page.git",
      description:
        "It is a Landing page created in html, css and boostrap for practice of design and develop websites.",
    },
    {
      id: 3,
      title: "Portfolio 1",
      subTitle: "Website Design & Development",
      image: PortFolio1,
      link: "https://biobramha.co.in/",
      github: "https://github.com/manishaprajapati-27/portfolio-1.git",
      description:
        "First Portfolio created in Feb 2023. It is a porfolio website develop in HTML, CSS, Bootstrap and JavaScript.",
    },
  ];

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
          {smallProjects.map((project) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="text">
                  <h3>{project.title}</h3>
                  <h5>{project.subTitle}</h5>
                  <div className="link-btns">
                    {project.link && (
                      <Link to={project.link} className="arrow" target="_blank">
                        <FiLink />
                      </Link>
                    )}
                    <Link to={project.github} className="arrow" target="_blank">
                      <FiGithub />
                    </Link>
                  </div>
                  <p className="mt-1">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallProjectSection;
