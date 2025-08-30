
import BusinessCard from "./BusinessCard";
import "../css/BusinessCard.css";

function BusinessSection() {
  const cardData = [
    {
      title: "Trade Inquiries",
      text: "We regularly receive trade inquiries from companies and entrepreneurs. We are equipped to address your needs whether you seek insights into a particular export market, desire to import or export goods/services to or from Lesotho, or simply require access to trade data. Accelerate Lesotho offers comprehensive trade assistance for all inquiries related to Lesotho and southern Africa. Our years of experience enable us to provide prompt and accurate responses to your most pressing questions, including those pertaining to:",
    },
    {
      title: "Brand Promotion",
      text: (
        <>
          <p>
           In today's market, a vast array of products competes for consumers' attention and a spot in their shopping carts. The item with the most effective brand positioning will ultimately be chosen. Accelerate Lesotho boasts a nationwide database and operational partnerships with malls, shopping centers, taxi ranks, independent supermarkets, grocers, tuck-shops, gas stations, higher education institutions, bottle-stores, taverns, eateries, and night clubs. Therefore, securing an ideal location for promoting your brand will not be a difficult task.
          </p>
          <ul className="business-card-list">
            <li>Brand Activations</li>
            <li>In-store Promotions</li>
            <li>Billboards and Radio</li>
            <li>Mall Activations</li>
            <li>Media Buying - Print</li>
          </ul>
        </>
      ),
    },
    {
      title: "CSR-Desk",
      text: "Corporate Social Responsibility (CSR) encompasses the idea that businesses should proactively engage in ethical and accountable practices, taking into account the concerns of all stakeholders within the company's operations and decisions. This service caters to clients who are interested in integrating or enhancing CSR principles within their organizations while fostering sustainability.",
    },
  ];

  return (
    <div className="business-card-container">
      {cardData.map((card, index) => (
        <BusinessCard key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
}

export default BusinessSection;
