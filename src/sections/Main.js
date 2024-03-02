import React, { useEffect, useState } from "react";
import "./Main.scss";
import Profile from "../images/Profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Main() {
  return (
    <div className="main">
      <Nav />
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__title">Front-End React Developer</h1>
          <p className="hero__desc">
            Hi, I'm Turgunbay Assylzhan. A passionate Front-end React Developer
            based in Shymkent, Kazakhstan. 📍
          </p>
          <span className="hero__links">
            <a
              className="hero__link"
              target="_blank"
              href="https://github.com/asekabtw"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="hero__link"
              target="_blank"
              href="https://www.linkedin.com/in/assylzhanturgunbay/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="hero__link"
              target="_blank"
              href="https://www.youtube.com/@asyooka/videos"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </span>
        </div>
        <div className="hero__img">
          <img src={Profile} alt="" />
        </div>
        <div className="hero__skills">
          <p>Tech Stack</p>
          <ul>
            <li>
              <img src="https://skillicons.dev/icons?i=html" alt="" />
            </li>
            <li>
              <img src="https://skillicons.dev/icons?i=css" alt="" />
            </li>
            <li>
              <img src="https://skillicons.dev/icons?i=javascript" alt="" />
            </li>
            <li>
              <img src="https://skillicons.dev/icons?i=react" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const [height, handleHeight] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleHeight(true);
    } else {
      handleHeight(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  function Link({ title, path }) {
    return (
      <li className="nav__link">
        <a href={path}>{title}</a>
      </li>
    );
  }

  return (
    <nav className={`nav ${height && "nav__shadow"}`}>
      <div className="nav-container">
        <h3 className="nav__logo">dev.aso</h3>
        <ul className="nav__links">
          <Link title="Home" path="" />
          <Link title="About" path="" />
          <Link title="Projects" path="" />
          <Link title="Contact" path="" />
        </ul>
      </div>
    </nav>
  );
}

export default Main;
