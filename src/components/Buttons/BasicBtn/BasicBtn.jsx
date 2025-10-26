import "./index.css";

export default function BasicBtn({ bg, title, link }) {
  return (
    <div className={bg}>
      <a href={link}>{title}</a>
    </div>
  );
}
