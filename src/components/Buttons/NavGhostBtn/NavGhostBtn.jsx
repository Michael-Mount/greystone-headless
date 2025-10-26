import "./index.css";

export default function NavGhostBtn({ title, link }) {
  return (
    <div className="Btn">
      <a href={link}>{title}</a>
    </div>
  );
}
