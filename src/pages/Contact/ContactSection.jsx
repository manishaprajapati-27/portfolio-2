import { Link } from "react-router-dom";
import { FaEnvelopeOpen, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

const ContactSection = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",  
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    let errorMessage = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // setError({ ...error, name: "", email: "", phone: "", message: "" });

    if (!/\S+@\S+\.\S+/.test(input.email)) {
      errorMessage.email = "Please enter a valid email address.";
    }
    if (!/^\d{10}$/.test(input.phone)) {
      errorMessage.phone = "Please enter a valid 10-digit phone number.";
    }
    if (input.name === "") {
      errorMessage.name = "Please enter your name.";
    }
    if (input.message === "") {
      errorMessage.message = "Please enter your message.";
    }
    setError(errorMessage);

    if (
      errorMessage.name ||
      errorMessage.email ||
      errorMessage.phone ||
      errorMessage.message
    ) {
      return;
    }

    setInput({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 7000);
  };

  return (
    <section className="section contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 me-lg-5">
            <div className="info">
              <h5 className="sub-heading">
                Send A Message <span></span>
              </h5>
              <h2 className="heading mb-1">
                Let Talk <span>&</span> Work <span>Together</span>
              </h2>
              <p className="mb-2">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="card mb-2">
                <div className="row">
                  <div className="col-2">
                    <div className="icon-info">
                      <FaEnvelopeOpen />
                    </div>
                  </div>
                  <div className="col-10 d-flex align-items-center justify-content-start">
                    <div className="info-card">
                      <h5>Mail Me</h5>
                      <p>
                        <a href="mailto: manprajapati268@gmail.com">
                          manprajapati268@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-icons">
                {/* <a href="#">
                  <FaFacebookF />
                </a> */}
                {/* <Link
                  to="https://www.instagram.com/manishaprajapati492/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link> */}
                <Link
                  to="https://github.com/manishaprajapati-27/"
                  target="_blank"
                >
                  <FiGithub />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/manisha-prajapati-019373221/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form onSubmit={handleSubmit} className="form">
              <div className="mb-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={input.name}
                  onChange={handleChange}
                />
              </div>
              {error.name && <p className="error-message mb-1">{error.name}</p>}
              <div className="mb-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
              {error.email && (
                <p className="error-message mb-1">{error.email}</p>
              )}
              <div className="mb-1">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Mobile Number"
                  value={input.phone}
                  onChange={handleChange}
                />
              </div>
              {error.phone && (
                <p className="error-message mb-1">{error.phone}</p>
              )}
              <div className="mb-1">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="form-control"
                  placeholder="Write Message"
                  value={input.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {error.message && (
                <p className="error-message mb-2">{error.message}</p>
              )}
              <button type="submit" className="button-arrow">
                <span>Send Message</span>
                <span className="icon">
                  <IoIosSend />
                </span>
              </button>
              {showMessage && (
                <p className="success-message mt-1">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
