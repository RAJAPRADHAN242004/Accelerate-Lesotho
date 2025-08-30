
import "../css/BusinessCard.css";

function BusinessCard({ title, text }) {
  return (
    <div className="business-card">
      <h2 className="business-card-title">{title}</h2>
      <p className="business-card-text">{text}</p>
    </div>
  );
}

export default BusinessCard;
