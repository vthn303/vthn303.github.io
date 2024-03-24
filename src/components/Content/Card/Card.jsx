import info from "../../../data/info.json";
import "../Card/Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Card = () => {
  return (
    <div className="container" style={{ flexWrap: "wrap" }}>
      {info.map((item, index) => (
        <div className="profile" key={index}>
          <div className="profile-infor">
            <div className="profile-avatar">
              <img src={item.avatar} alt="" />
            </div>
            <h2>{item.name}</h2>
            <p>{item.address}</p>
            <div className="socials">
              <a href="#" style={{ color: "#6c6bf5" }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" style={{ color: "#5562ea" }}>
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="#" style={{ color: "#ee0bae" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
