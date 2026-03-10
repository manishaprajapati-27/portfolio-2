import Hero from "./Hero";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ProjectSecition from "./ProjectSecition";
import OfficeProjects from "../Work/OfficeProjects";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
  const pageStart = () => {
    window.scrollTo(1, 1);
  };
  return (
    <motion.div>
      <Hero />
      <AboutSection />
      <ProjectSecition />
      <OfficeProjects limit={3} />
      <section className="section pt-0">
        <div className="container">
          <Link to="/work" onClick={pageStart} className="button-arrow mt-2">
            <span>See All</span>
            <span className="icon">
              <FaChevronRight />
            </span>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
