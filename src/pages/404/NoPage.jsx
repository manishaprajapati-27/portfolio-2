import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NoPage = () => {
  const pageStart = () => {
    window.scrollTo(1, 1);
  };
  return (
    <section className="section no-page-found">
      <div className="container">
        <motion.div
          className="text"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "tween", duration: 2, delay: 1 }}
        >
          <h2 className="heading">
            <span>4</span>0<span>4</span>
          </h2>
          <h5>
            Page <span>Not</span> Found
          </h5>
          <h6>The page you are looking for was not fonud</h6>
          <Link to="/" onClick={pageStart} type="button" className="button">
            <span>Go Home</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NoPage;
