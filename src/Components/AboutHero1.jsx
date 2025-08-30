import hero2 from '../assets/hero2.jpg';
import '../css/AboutHero1.css';
import { Link } from 'react-router-dom';

const AboutHero1 = () => {
  return (
    <section
      className="aboutHero1-section"
      style={{ backgroundImage: `url(${hero2})` }}
    >
      <div className="aboutHero1-overlay">
        <div className="aboutHero1-content">
          <h1 className="aboutHero1-title">ABOUT US</h1>
          <p className="aboutHero1-subtitle">
            As a facilitator, the services we provide hold paramount significance. Our diverse array of professional solutions empowers our clients to effectively engage in trading, investing and networking within Lesotho, the Southern African region (SADC) and beyond.
          </p>
          <p className="aboutHero1-subtitle">
            Our array of services encompasses a diverse range of offerings, including market entry assistance, and business support within Lesotho. We pride ourselves on our exceptional networking capabilities, which we leverage to bring together individuals from all corners of the business community through events and matchmaking sessions.
          </p>

          {/* 👇 Centered Button */}
          <div className="aboutHero1-button-container">
            <Link to="/service" className="aboutHero1-button">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero1;
