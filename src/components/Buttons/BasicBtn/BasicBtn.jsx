import "./index.css";

export default function BasicBtn({ title, link }) {
  return (
    <div className="basic-btn">
      <a href={link}>{title}</a>
    </div>
  );
}
