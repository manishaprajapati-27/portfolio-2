import { officeProjectsData } from "../../data";
import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";

const OfficeProjects = ({ limit }) => {
  const projectsToShow = limit
    ? officeProjectsData.slice(0, limit)
    : officeProjectsData;

  return (
    <section className="section small-project pb-0">
      <div className="container">
        <h5 className="sub-heading mb-1">
          Some Projects <span></span>
        </h5>
        <h2 className="heading mb-2">
          Professinal <span>Projects</span> By Me
        </h2>
        <div className="row">
          {/* {projectsToShow.map((project) => (
                <OfficeProjectCards />
            )} */}

          {projectsToShow.map((project) => (
            // <OfficeProjectCards key={project.id} data={project} />
            <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
              <div className="card">
                <div className="image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="text">
                  <h3>{project.title}</h3>
                  <h5>{project.subTitle}</h5>
                  <div className="link-btns">
                    <Link to={project.link} target="_blank" className="arrow">
                      <FiLink />
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

export default OfficeProjects;
