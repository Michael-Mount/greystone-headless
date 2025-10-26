import "./index.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

import BasicBtn from "../Buttons/BasicBtn/BasicBtn";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="topRow">
          <div className="footerMenu">
            <ul>
              <li>
                <Link to="/policies">Policies</Link>
              </li>
              <li>
                <Link to="/accessibility">Accessiibility</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="newsLetterBtn">
            <BasicBtn bg="white-btn" title="Join the Newsletter" link="/" />
          </div>
        </div>
        <div className="bottomRow">
          <div className="addressContainer">
            <div className="content">
              <p>
                220 GREYSTONE LANE <br /> LAKE TOXAWAY, NC 28747
              </p>
            </div>
          </div>
          <div className="iconContainer">
            <ul>
              <li>
                <a href="https://www.instagram.com/thegreystoneinn/">
                  <FaInstagram className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thegreystoneinn/">
                  <FaFacebook className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thegreystoneinn/">
                  <FaPinterest className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thegreystoneinn/">
                  <FaYoutube className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
