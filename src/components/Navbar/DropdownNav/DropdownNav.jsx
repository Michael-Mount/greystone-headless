import "./index.css";
import { Link } from "react-router-dom";

export default function DropdownNav({ main, link, items }) {
  return (
    <div className="dropdown">
      <Link to={link} className="dropdownToggle">
        {main} <i className="arrow up"></i>
      </Link>
      <div className="dropdown-menu">
        {items.map(({ label, path }) => (
          <Link key={path} to={path} className="dropdown-item">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
