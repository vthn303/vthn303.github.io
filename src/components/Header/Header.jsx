import "../Header/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faTablet } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="container">
      <div className="container-1">
        <a href="">
          <img
            src="https://bootstrapmade.com/assets/img/logo.png"
            alt="logo-header"
            style={{ width: "200px" }}
          />
        </a>
        <div className="device-logo">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon
                className="angle-center"
                  icon={faDesktop}
                  style={{ color: "#fefbfb" }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="angle-center" icon={faTablet} style={{ color: "#fafafa" }} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="angle-center" icon={faMobile} style={{ color: "#fefbfb" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="center-logo">
          <a href="#" className="angle-center">
            <FontAwesomeIcon className="icon" icon={faAngleLeft} style={{ color: "#fefbfb" }} />
          </a>
          <a
            href="#"
            style={{
              margin: "0 10px 0 10px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bolder",
            }}
          >
            SoftLand
          </a>
          <a href="#" className="angle-center">
            <FontAwesomeIcon className="icon" icon={faAngleRight} style={{ color: "#fefbfb" }} />
          </a>
        </div>
        <div className="share-and-download">
          <a href="#" className="angle-center share">
            <FontAwesomeIcon
            className="icon"
              icon={faArrowUpRightFromSquare}
              style={{ color: "#fefbfb" }}
            />
          </a>
          <a href="#" className="download-box">
            <FontAwesomeIcon
              icon={faDownload}
              style={{ color: "#fefbfb", marginRight: "10px" }}
            />
            <span style={{color:"white"}}>FREE DOWNLOAD</span>
          </a>
        </div>
      </div>

      <nav>
        <label htmlFor="logo">SoftLand</label>
        <div className="list-item">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ padding: "5px", paddingTop: "8px" }}
                />
              </a>
              <div className="dropdown_menu">
                <ul>
                  <li>
                    <a href="#">Drop down 1</a>
                  </li>
                  <li>
                    <a href="#">
                      Deep Drop Down{" "}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{ marginLeft: "20px" }}
                      />
                    </a>
                    <div className="dropdown_menu-1">
                      <ul>
                        <li>
                          <a href="#">Deep Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Down 5</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;