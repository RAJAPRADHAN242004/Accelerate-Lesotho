import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import ServiceHero from "./ServiceHero";
import "../css/Service.css";


function Service() {
  return (
    <div>
      <Header/>
      <ServiceHero/>
       <div className="service">
  <h2>Our Services</h2>
  <h1>
    We have the knowledge and expertise to provide you with relevant information.
    These are the services that we offer:
  </h1>
</div>
      <Card/>
      <Footer/>
    </div>
  );
}
export default Service;