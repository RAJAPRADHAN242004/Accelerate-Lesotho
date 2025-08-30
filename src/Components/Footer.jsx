
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-brand">
          <h2>Accelerate Lesotho</h2>
          <p>Empowering Innovation & Growth</p>
        </div>

     
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Maseru, Lesotho</p>
          <p>📞 +266 5836 4611</p>
          <p>📧 info@acceleratelesotho.com</p>
        </div>

      
        <div className="footer-links">
          <h3>Company</h3>
          <a href="#Home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>


      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Accelerate Lesotho. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
