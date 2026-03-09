import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import { officeProjectsData } from "../data";

const OfficeProjectCards = () => {
  return (
    <>
      {officeProjectsData.map((project) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
          <div className="card">
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="text">
              <h3>{project.title}</h3>
              <h5>{project.description}</h5>
              <div className="link-btns">
                <Link to={project.link} target="_blank" className="arrow">
                  <FiLink />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OfficeProjectCards;
