import "../index.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link, useLocation } from "react-router-dom";

import DropdownNav from "../DropdownNav/DropdownNav";
import HambrgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavGhostBtn from "../../Buttons/NavGhostBtn/NavGhostBtn";
import MobileNavDrawer from "../MobileNavDrawer/MobileNavDrawer";

import Logo from "../../../images/picsvg_download.svg";

gsap.registerPlugin(ScrollTrigger);

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

const hamLinks = [
  { label: "Accessibility", path: "/accessibility" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/careers" },
];

const BOOK_URL =
  "https://s006006.officialbookings.com/?activeBookingEngine=KBE&propertyCode=S006006&skd-checkin=2025-11-02&skd-checkout=2025-11-03&skd-property-code=S006006";

export default function MainNav() {
  const navContainer = useRef(null);
  const bookBtn = useRef(null);
  const location = useLocation();

  // true for /events/some-slug, but not for /events
  const isEventDetail =
    location.pathname.startsWith("/events/") && location.pathname !== "/events";

  useGSAP(
    () => {
      const nav = navContainer.current;
      const btn = bookBtn.current;
      if (!nav) return;

      // Kill previous ScrollTriggers for nav & button (if any)
      ScrollTrigger.getById("navColor")?.kill();
      ScrollTrigger.getById("bookBtn")?.kill();

      if (isEventDetail) {
        // DETAIL PAGES → static nav, no scroll animation
        gsap.set(nav, { backgroundColor: "#003d51" });

        if (btn) {
          gsap.set(btn, {
            backgroundColor: "white",
            color: "#003d51",
          });
        }

        return; // don't create any ScrollTriggers
      }

      // NON-DETAIL PAGES → reset to base state, then add scroll animation

      // Set your "initial" look here (match whatever your CSS default is)
      gsap.set(nav, { backgroundColor: "transparent" });

      if (btn) {
        gsap.set(btn, {
          backgroundColor: "transparent",
          color: "#ffffff", // or whatever your default text color is
        });
      }

      const scroller = document.documentElement;

      gsap.to(nav, {
        backgroundColor: "#003d51",
        scrollTrigger: {
          id: "navColor",
          trigger: scroller,
          start: "top top",
          end: "+=200",
          scrub: true,
        },
      });

      if (btn) {
        gsap.to(btn, {
          backgroundColor: "white",
          color: "#003d51",
          scrollTrigger: {
            id: "bookBtn",
            trigger: scroller,
            start: "top top",
            end: "+=200",
            scrub: true,
          },
        });
      }
    },
    {
      // Re-run when we switch between detail and non-detail routes
      dependencies: [isEventDetail],
    }
  );

  return (
    <nav className="nav fixed top-0 left-0 right-0 z-50" ref={navContainer}>
      <div className="navContainer">
        {/* Logo */}
        <div className="logoContainer">
          <Link to="/">
            <img src={Logo} alt="The Greyston white logo" className="logo" />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="mainMenu hidden md:flex">
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
            <NavGhostBtn title="Reserve Now" link={BOOK_URL} ref={bookBtn} />
          </li>
        </ul>

        {/* MOBILE NAV (hamburger + drawer + overlay) */}
        <div className="md:hidden">
          <MobileNavDrawer
            stayLinks={stayLinks}
            roomLinks={roomLinks}
            eventsLinks={eventsLinks}
            hamLinks={hamLinks}
            bookLink={BOOK_URL}
          />
        </div>
      </div>
    </nav>
  );
}
