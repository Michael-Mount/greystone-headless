import "./index.css";
import { Link } from "react-router-dom";

export default function BasicBtn({ bg, title, link }) {
  return (
    <div className={bg}>
      <Link to={link}>{title}</Link>
    </div>
  );
}
