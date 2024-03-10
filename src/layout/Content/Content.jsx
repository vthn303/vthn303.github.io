import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Content/Content.css";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Content = () => {
  return (
    <div className="content-main">
      <div className="tittle-content">
        <h1>Save your time to using SoftLand</h1>
      </div>
      <div className="box-content">
        <div className="medium-box">
          <div className="box">
            <FontAwesomeIcon className="faTeam" icon={faPeopleGroup} />
            <h3>Explore Your Team</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              beatae!
            </p>
          </div>
        </div>
        <div className="medium-box">
          <div className="box">
            <FontAwesomeIcon className="faSun" icon={faSun} />
            <h3>Digital Whiteboard</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              beatae!
            </p>
          </div>
        </div>
        <div className="medium-box">
          <div className="box">
            <FontAwesomeIcon className="faChart" icon={faChartSimple} />
            <h3>Design To Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              beatae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
