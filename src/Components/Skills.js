import React from "react";

function Skills() {
  return (
    <div className="container">
      <div
        className=" display-6 text-center pt-5"
        data-aos="slide-up"
        data-aos-duration="1500"
      >
        Skills
      </div>
      <div className="container mt-3 d-flex align-items-center justify-content-center flex-column">
        <div className="skills">
          <div className="skills-bar">
            <div className="bar">
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line">
                <span className="html"></span>
              </div>
              <div className="bar">
                <div className="info">
                  <span>CSS</span>
                </div>
                <div className="progress-line">
                  <span className="css"></span>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>React Js</span>
                  </div>
                  <div className="progress-line">
                    <span className="react"></span>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>Javascript</span>
                    </div>
                    <div className="progress-line">
                      <span className="javascript"></span>
                    </div>
                    <div className="bar">
                      <div className="info">
                        <span>Bootstrap</span>
                      </div>
                      <div className="progress-line">
                        <span className="bootstrap"></span>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Node Js</span>
                        </div>
                        <div className="progress-line">
                          <span className="nodejs"></span>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>MUI (Material UI)</span>
                          </div>
                          <div className="progress-line">
                            <span className="mui"></span>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>C++ Programming</span>
                            </div>
                            <div className="progress-line">
                              <span className="c"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
