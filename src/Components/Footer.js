import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../data";
function Footer() {
  const [active] = useState(NavData);
  return (
    <>
      <div className="container border-top mt-5">
        <footer className="pb-3 my-2">
          <ul className="nav justify-content-center pb-3 mb-3">
            {active.map((key) => (
              <li>
                <NavLink
                  exact
                  key={key.id}
                  className="nav-link footer-links"
                  to={key.to}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  {key.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="d-flex  justify-content-between align-items-center pb-3 mb-4 footer-disc">
            <div className="col-md-4 d-flex align-items-center footer-name">
              <span className="text-muted">© 2021 Danish Shaikh</span>
            </div>
            <ul className="nav flex-wrap col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://twitter.com/DanishS43771284"
                >
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="https://discord.gg/q9dh6a9v">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/discord-logo.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.instagram.com/danish512s/"
                >
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
