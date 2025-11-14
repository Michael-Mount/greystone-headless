import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavGhostBtn from "../../Buttons/NavGhostBtn/NavGhostBtn";

export default function MobileNavDrawer({
  stayLinks,
  roomLinks,
  eventsLinks,
  hamLinks,
  bookLink,
}) {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      )
      .fromTo(
        overlayRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, ease: "power3.out" },
        0
      );
  });

  const openMenu = () => {
    if (!tl.current) return;
    tl.current.play();
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    if (overlayRef.current) {
      overlayRef.current.style.pointerEvents = "auto";
    }
  };

  const closeMenu = () => {
    if (!tl.current) return;
    tl.current.reverse();
    setIsOpen(false);
    document.body.style.overflow = "";
    if (overlayRef.current) {
      overlayRef.current.style.pointerEvents = "none";
    }
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <button
        type="button"
        className="flex flex-col justify-between w-7 h-6 focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
      >
        <span
          className={`h-[2px] bg-white rounded origin-left transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        ></span>
        <span
          className={`h-[2px] bg-white rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-[2px] bg-white rounded origin-left transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        ></span>
      </button>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/40 opacity-0 pointer-events-none md:hidden"
        onClick={closeMenu}
      ></div>

      {/* SIDE DRAWER */}
      <aside
        ref={menuRef}
        className="fixed top-0 right-0 z-50 h-screen w-[80%] max-w-xs bg-[#003d51] text-white pt-24 pb-10 px-6 translate-x-full md:hidden flex flex-col gap-6"
      >
        <nav className="space-y-6">
          {/* Stay */}
          <div className="space-y-2">
            <Link
              to="/stay"
              className="text-[11px] tracking-[0.25em] text-white/60"
            >
              Stay
            </Link>
            <ul className="space-y-2">
              {stayLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className="block text-sm tracking-[0.16em] uppercase"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div className="space-y-2">
            <Link
              to="/rooms"
              className="text-[11px] tracking-[0.25em] text-white/60"
            >
              Rooms
            </Link>
            <ul className="space-y-2">
              {roomLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className="block text-sm tracking-[0.16em] uppercase"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div className="space-y-2">
            <Link
              to="/events"
              className="text-[11px] tracking-[0.25em] text-white/60"
            >
              Events
            </Link>
            <ul className="space-y-2">
              {eventsLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className="block text-sm tracking-[0.16em] uppercase"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility / footer links */}
          <div className="pt-4 border-t border-white/15 space-y-2">
            {hamLinks.map(({ label, path }) => (
              <div key={path}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className="block text-xs tracking-[0.18em] uppercase text-white/80"
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Reserve button */}
          <div className="pt-4">
            <div onClick={closeMenu}>
              <NavGhostBtn title="Reserve Now" link={bookLink} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
