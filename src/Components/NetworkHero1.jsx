import network2 from '../assets/network2.jpg';
import '../css/NetworkHero1.css';
import { Link } from 'react-router-dom';

const NetworkHero1 = () => {
  return (
    <section
      className="networkHero1-section"
      style={{ backgroundImage: `url(${network2})` }}
    >
      <div className="networkHero1-overlay">
        <div className="networkHero1-content">
          <h1 className="networkHero1-title">Networking Events</h1>
          <p className="networkHero1-subtitle">
           Accelerate Lesotho provides entrepreneurs and innovators the opportunity to meet, network, exchange ideas and experiences through its BizLinx Breakfasts. Participants are introduced to each other and these contacts are essential to develop new, mutually beneficial business relationships.
          </p>
          <h3 className="networkHero1-title">BizLinx Breakfast</h3>
          <p className="networkHero1-subtitle">
            Through its BizLinx Breakfast events, Accelerate Lesotho offers a platform for entrepreneurs and innovators to connect, share ideas, and learn from each other's experiences. These gatherings facilitate introductions between participants, forging valuable business connections that can lead to fruitful collaborations.
          </p>

      
          <div className="networkHero1-button-container">
            <Link to="/service" className="networkHero1-button">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkHero1;
