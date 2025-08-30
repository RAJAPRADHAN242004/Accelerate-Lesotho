
import "../css/MarketCard.css";

function MarketCard({ title, text }) {
  return (
    <div className="market-card">
      <h2 className="market-card-title">{title}</h2>
      <p className="market-card-text">{text}</p>
    </div>
  );
}

export default MarketCard;
