import OfficeProjectCards from "../../components/OfficeProjectCards";

const OfficeProjects = () => {
  return (
    <section className="section small-project">
      <div className="container">
        <h5 className="sub-heading mb-1">
          Some Projects <span></span>
        </h5>
        <h2 className="heading mb-2">
          Professinal <span>Projects</span> By Me
        </h2>
        <div className="row">
          <OfficeProjectCards />
        </div>
      </div>
    </section>
  );
};

export default OfficeProjects;
