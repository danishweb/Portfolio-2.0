import { Box } from "@mui/system";
import React from "react";

function Contact() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "50vw",
          height: "50vh",
          backgroundColor: "#f7f7f7",
        }}
        style={{ borderRadius: 8 }}
        className="d-flex align-items-center justify-content-center"
      >
        <div
          className="d-flex align-items-center flex-wrap social-icons justify-content-center"
          data-aos="slide-down"
          data-aos-duration="1500"
        >
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.instagram.com/danish512s/"
              target="_blank"
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://github.com/danishweb"
              target="_blank"
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://twitter.com/DanishS43771284"
              target="_blank"
            >
              <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" />
            </a>
          </li>

          <li className="ms-3">
            <a
              className="text-muted"
              href="https://discord.gg/q9dh6a9v"
              target="_blank"
            >
              <img src="https://img.icons8.com/ios-glyphs/30/000000/discord-logo.png" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.facebook.com/profile.php?id=100065252679547"
              target="_blank"
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/facebook-new.png" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#" target="_blank">
              <img src="https://img.icons8.com/material-outlined/24/000000/whatsapp--v1.png" />
            </a>
          </li>
          <li className="ms-3"></li>
        </div>
      </Box>
    </div>
  );
}

export default Contact;
