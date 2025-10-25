import { useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function HambrgerMenu({ items }) {
  const hamRef = useRef();
  const menuRef = useRef();

  const toggleMenu = () => {
    hamRef.current.classList.toggle("active");
    menuRef.current.classList.toggle("active");
  };

  return (
    <>
      <div className="ham-menu" ref={hamRef} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="off-screen-menu" ref={menuRef}>
        <div className="close-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div>
        <div className="custom-divider"></div>
        {items.map(({ label, path }) => (
          <Link key={path} to={path} className="ham-item">
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
