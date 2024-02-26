import React, { useEffect, useState } from "react";
import "./Main.scss";

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

function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <Nav />
      </div>
    </div>
  );
}

export default Main;
