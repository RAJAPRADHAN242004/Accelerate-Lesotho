import "../css/MarketHero1.css";
import booking from "../assets/booking.jpg"; 
import { Link } from "react-router-dom"; 

function MarketHero1() {
  return (
    <div
      className="market-hero-section"
      style={{ backgroundImage: `url(${booking})` }}
    >
      <div className="market-hero-overlay">
        <div className="market-hero-content">
          <h3 className="market-hero-title">Trade Missions</h3>
          <h1 className="market-hero-heading">Multi-sector Trade Missions</h1>
          <p className="market-hero-subtitle">
            Accelerate Lesotho organizes (multi) sector trade missions annually in collaboration with various partners. Our missions provide companies and organizations with a distinctive chance to explore potential opportunities in a target country or broaden existing contacts and activities. Through customized programs, including matchmaking sessions, company visits, informative seminars, and networking events, companies are empowered to mold their global aspirations into reality.
            <br /><br />
            <strong>Individual Trade Mission</strong><br />
            Accelerate Lesotho provides bespoke trade missions to individual companies or organizations that are tailored to their specific needs and desires. We offer a comprehensive program that enables our clients to explore, meet, and investigate opportunities in their desired field and geographic location. Our personalized approach includes matchmaking services and site visits, as well as connections with relevant partners in both the business and government sectors, ensuring an exceptionally effective mission.
          </p>

          <h1 className="market-hero-heading">Fact-finding Mission</h1>
          <p className="market-hero-subtitle">
            When your organization is considering the launch of a new project or business venture, it is imperative to gather sufficient information in order to make an informed decision. In such instances, a fact-finding mission may prove beneficial. Such missions typically involve site visits to relevant projects within the industry, informative meetings with public and private sector stakeholders, specialized workshops focused on sector-specific information dissemination, as well as presentations and networking sessions aimed at inspiring creativity and innovation. These components provide all necessary elements for making informed decisions regarding potential next steps in bringing your ideas to fruition.
          </p>
          <div className="market-hero-button-wrapper">
  <Link to="/service" className="market-hero-button">Our Services</Link>
</div>
        </div>
      </div>
    </div>
  );
}

export default MarketHero1;
