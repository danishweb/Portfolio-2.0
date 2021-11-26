import React from "react";
import Grid from "@mui/material/Grid";
import Skills from "./Skills";
function Home() {
  return (
    <>
      <div className="home">
        {/* Introduction */}
        <div className="container">
          <div className="pt-5">
            <Grid container spacing={2} lg={12} justifyContent="flex-end">
              <Grid
                item
                xs={4}
                lg={2}
                style={{ display: "grid", alignItems: "center" }}
              >
                <div className="d-flex align-items-center justify-content-center ">
                  <div className="image-dp">
                    <div data-aos="flip-left" data-aos-duration="1500">
                      <img
                        src="https://img.icons8.com/ios/100/000000/user--v3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={8} lg={5} wrap="nowrap">
                <div className="border-start ps-2" id="welcome">
                  <div
                    className=" display-6"
                    data-aos="slide-down"
                    data-aos-duration="1500"
                  >
                    Hi, I'm Danish Shaikh.
                  </div>
                  <div
                    className="lead"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    I am a Full Stack Web Developer and Engineering Student at
                    SPPU.
                    <br />
                    <strong>B.E (I.T), 2023</strong>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* Welcome */}
          <div className="pt-5">
            <Grid container spacing={2}>
              <Grid item xs={8} lg={5} wrap="nowrap">
                <div className="border-end ps-2" id="welcome">
                  <div
                    className=" display-5"
                    data-aos="slide-down"
                    data-aos-duration="1500"
                  >
                    WELCOME
                  </div>
                  <div
                    className="lead"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    Hi, Welcome to my Portfolio, Through constant practice &
                    learning, I produce aesthetic websites to an high standard.
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                lg={2}
                style={{ display: "grid", alignItems: "center" }}
              >
                <div className="d-flex align-items-center justify-content-center ">
                  <div className="image-dp">
                    <div data-aos="flip-right" data-aos-duration="2000">
                      <img
                        src="https://img.icons8.com/ios/100/000000/web.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default Home;
