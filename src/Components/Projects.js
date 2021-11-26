import React from "react";
import Box from "@mui/material/Box";

function Projects() {
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
        className="d-flex align-items-center justify-content-center flex-row"
      >
        <div
          className=" display-5 text-center"
          data-aos="slide-down"
          data-aos-duration="1500"
        >
          Working in Progress
        </div>
      </Box>
    </div>
  );
}

export default Projects;
