import "./index.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

import whiteLogo from "../../images/picsvg_download.svg";
import BasicBtn from "../Buttons/BasicBtn/BasicBtn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <div className="footerInner">
        {/* Top row: brand, nav, newsletter */}
        <div className="footerTopRow">
          {/* Brand / address */}
          <div className="footerBrand">
            <img className="footerLogo" src={whiteLogo} alt="Greystone Logo" />
            <p className="footerAddress">
              220 Greystone Lane
              <br />
              Lake Toxaway, NC 28747
            </p>
          </div>

          {/* Main navigation */}
          <nav className="footerNav" aria-label="Footer navigation">
            <p className="footerNavLabel">Explore</p>
            <ul>
              <li>
                <Link to="/policies">Policies</Link>
              </li>
              <li>
                <Link to="/accessibility">Accessibility</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="footerNewsletter">
            <p className="footerNavLabel">Stay in Touch</p>
            <p className="footerNewsletterText">
              Be the first to know about seasonal offers, events, and lakefront
              experiences.
            </p>
            <div className="footerNewsletterBtn">
              <BasicBtn bg="white-btn" title="Join the Newsletter" link="/" />
            </div>
          </div>
        </div>

        {/* Bottom row: management, copyright, socials */}
        <div className="footerBottomRow">
          <div className="footerMeta">
            <p className="footerMetaLine">
              Management{" "}
              <a
                href="https://haycreekhotels.com"
                target="_blank"
                rel="noreferrer"
              >
                Hay Creek Hotels
              </a>
            </p>
            <p className="footerMetaLine">
              © {currentYear} The Greystone Inn. All Rights Reserved.
            </p>
          </div>

          <div className="footerSocial">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/thegreystoneinn/"
                  aria-label="Greystone Inn Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/TheGreystoneInn"
                  aria-label="Greystone Inn Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/search/pins/?q=greystone%20inn"
                  aria-label="Greystone Inn Pinterest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPinterest className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/results?search_query=greystone+inn+lake+toxaway"
                  aria-label="Greystone Inn YouTube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
