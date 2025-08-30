import bg_hero from '../assets/bg-hero.jpg';
import '../css/Hero1.css';
import { Link } from 'react-router-dom';

const Hero1 = () => {
  return (
    <section
      className="hero1-section"
      style={{ backgroundImage: `url(${bg_hero})` }}
    >
      <div className="hero1-overlay">
        <div className="hero1-text-content">
          <h1 className="hero1-title">Welcome to</h1>
          <h1 className="hero1-title">Accelerate Lesotho</h1>
          <p className="hero1-subtitle">
           Accelerate Lesotho serves as a pivotal intermediary for companies, organizations, and entrepreneurs who are either conducting business or seeking to conduct business within and between Lesotho, the Southern African region (SADC), and beyond. We provide a vast array of professional services that enable our clients to import, export, and invest with great success. Our services will help to initiate or accelerate your business endeavors by granting you access to expertise, knowledge, potential new business partners, various business opportunities as well as product/service promotion through an extensive range of tailor-made support services.
          </p>
          <p className="hero1-subtitle">
            Accelerate Lesotho's primary focus is on guiding you in doing business both domestically within Lesotho and globally. With a broad network spanning across both public and private sectors alike; we have the ability to open doors for our clientele while offering custom solutions tailored specifically towards their individual company or organizational needs. Whether it be joining one of our trade missions or attending an informative session designed specifically for exploring your unique set of circumstances - Accelerate Lesotho is at your service.
          </p>
          <Link to="/about" className="hero1-button">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
