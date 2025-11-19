import { Link } from "react-router-dom";
import "./index.css";

export default function NavGhostBtn({ title, link }) {
  return (
    <div className="Btn">
      <Link to={link}>{title}</Link>
    </div>
  );
}
