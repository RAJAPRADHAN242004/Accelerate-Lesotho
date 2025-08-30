import hero1 from "../assets/hero1.jpg";
import card3 from "../assets/card3.jpg"; 
import business from "../assets/business.jpg";
import "../css/Card.css"; 
import { Link } from "react-router-dom"; 

function Card() {
  const cards = [
    { img: hero1, title: "Market Entry", text: "There are numerous approaches that a company can adopt to penetrate the Lesotho, Southern African/global market. It is noteworthy that there exists no universal entry strategy for these markets. Whether you have already formulated your market entry plan or not, Accelerate Lesotho can furnish you with valuable insights, guidance and support. We believe that comprehending your business and target market holds the key to attaining optimal results.",path: "/market" },
    { img: card3, title: "Business Support Services", text: "The Accelerate Lesotho Business Support Services are designed to aid in the acceleration of your business growth. Our extensive network of specialists is readily available to provide assistance with various aspects of business development and address any challenges that may arise. With a forward-thinking approach, we draw on our local expertise to propel your company or organization towards greater success.",path: "/business-support" },
    { img: business, title: "Networking Events", text: "Accelerate Lesotho provides entrepreneurs and innovators the opportunity to meet, network, exchange ideas and experiences through its BizLinx Breakfasts. Participants are introduced to each other and these contacts are essential to develop new, mutually beneficial business relationships.",path: "/networking-events" },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} className="card-image" />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <Link to={card.path} className="btn btn-primary">
  Read more
</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
