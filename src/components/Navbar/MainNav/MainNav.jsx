import "../index.css";
import { Link } from "react-router-dom";

import DropdownNav from "../DropdownNav/DropdownNav";
import HambrgerMenu from "../HamburgerMenu/HamburgerMenu";

import Logo from "../../../images/picsvg_download.svg";

/* Dropdown Array */
const roomLinks = [
  { label: "Cottage", path: "/cottage" },
  { label: "Hillmont", path: "/hillmont" },
  { label: "Mansion", path: "/mansion" },
  { label: "Rentals", path: "/rentals" },
];

const stayLinks = [
  { label: "Packages & Offers", path: "/packages" },
  { label: "Enhancements", path: "/enhancements" },
];

const eventsLinks = [
  { label: "Activites", path: "/activities" },
  { label: "Experience", path: "/experience" },
];

/* Ham Array */
const hamLinks = [
  { label: "Accessibility", path: "/accessibility" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/careers" },
];

export default function MainNav() {
  return (
    <>
      <nav className="nav">
        <div className="navContainer">
          <div className="logoContainer">
            <Link to="/">
              <img src={Logo} alt="The Greyston white logo" className="logo" />
            </Link>
          </div>
          <ul className="mainMenu">
            <li className="listItem">
              <DropdownNav main="Stay" link="/stay" items={stayLinks} />
            </li>
            <li className="listItem">
              <DropdownNav main="Rooms" link="/rooms" items={roomLinks} />
            </li>
            <li className="listItem">
              <Link to="/dine">Dine</Link>
            </li>
            <li className="listItem">
              <Link to="/spa">Spa</Link>
            </li>
            <li className="listItem">
              <DropdownNav main="Events" link="/events" items={eventsLinks} />
            </li>
            <li className="listItem">
              <HambrgerMenu items={hamLinks} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
