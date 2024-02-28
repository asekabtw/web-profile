import React, { useEffect, useState } from "react";
import "./Main.scss";
import Profile from "../images/Profile.png";

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
      <div className="hero__info">
        <div className="hero__text">
          <h1 className="hero__title">Front-End React Developer</h1>
          <p className="hero__desc">
            Hi, I'm Turgunbay Assylzhan. A passionate Front-end React Developer
            based in Shymkent, Kazakhstan. 📍
          </p>
          <span className="hero__links">
            <a className="hero__link" href=""></a>
            <a className="hero__link" href=""></a>
          </span>
        </div>
        <div className="hero__img">
          <img src={Profile} alt="" />
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
