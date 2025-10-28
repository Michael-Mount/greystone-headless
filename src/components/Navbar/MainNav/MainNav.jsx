import "../index.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

import DropdownNav from "../DropdownNav/DropdownNav";
import HambrgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavGhostBtn from "../../Buttons/NavGhostBtn/NavGhostBtn";

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
  const navContainer = useRef(null);
  const bookBtn = useRef(null);

  useGSAP(() => {
    gsap.to(navContainer.current, {
      backgroundColor: "#003d51",
      scrollTrigger: {
        trigger: navContainer.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(bookBtn.current, {
      backgroundColor: "white !imporant",
      scrollTrigger: {
        trigger: navContainer.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <>
      <nav className="nav" ref={navContainer}>
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
            <li className="listItem">
              <NavGhostBtn title="Reserve Now" link="#" ref={bookBtn} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
