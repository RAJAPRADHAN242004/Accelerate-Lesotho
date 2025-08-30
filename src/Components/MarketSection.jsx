
import MarketCard from "./MarketCard";
import "../css/MarketCard.css";

function MarketSection() {
  const cardData = [
    {
      title: "Quick-Scan",
      text: "A simple but comprehensive analysis, known as a quick scan, concentrates on either a general or specific area within the target market. It serves as the initial phase in the consultation process, aiming to provide your company with recommendations for subsequent measures required to penetrate a market successfully.",
    },
    {
      title: "Market Research",
      text: (
        <>
          <p>
            Market analysis is customized data that links your enterprise to prospects in Lesotho, Southern Africa or globe. Accelerate Lesotho offers the following:
          </p>
          <ul className="market-card-list">
            <li>Feasibility Studies</li>
            <li>Stakeholder Analysis</li>
            <li>Competitors Analysis</li>
            <li>Customer Analysis</li>
          </ul>
        </>
      ),
    },
    {
      title: "Matchmaking",
      text: "When venturing into a new market, the significance of an established network cannot be overstated. Accelerate Lesotho provides you with access to precisely the right avenues. We facilitate introductions to pertinent entities and potential business associates, offering bespoke one-on-one sessions that enable effective matchmaking. Accelerate Lesotho offers a comparable service to individuals participating in trade or fact-finding missions. Through personalized matchmaking, Accelerate Lesotho will facilitate the identification of potential business partners, including but not limited to agents, joint venture partners, importers, distributors and investors.",
    },
  ];

  return (
    <div className="market-card-container">
      {cardData.map((card, index) => (
        <MarketCard key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
}

export default MarketSection;
