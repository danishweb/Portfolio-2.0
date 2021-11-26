import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import { NavData } from "../data";

function NavBar() {
  const [active, setActive] = useState(NavData);
  const [navactive, setNavactive] = useState(false);

  const changeBackgroundNav = () => {
    if (window.scrollY >= 100) {
      setNavactive(true);
    } else {
      setNavactive(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundNav);

  return (
    <>
      <nav
        className={
          navactive
            ? "navbar navbar-expand-lg navbar-light position-fixed nav-active"
            : "navbar navbar-expand-lg navbar-light"
        }
        id="navbar nav"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" exact>
            <img className="logo" src={logo} href="logo" />
            {/* Danish Shaikh */}
          </Link>
          <div
            className="navbar-toggler1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              {active.map((key) => (
                <li className="nav-item">
                  <NavLink
                    exact
                    key={key.id}
                    className="nav-link"
                    activeClassName="active"
                    to={key.to}
                  >
                    {key.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
