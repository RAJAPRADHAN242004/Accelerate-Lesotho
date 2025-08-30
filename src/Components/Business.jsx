import Header from "./Header";
import BusinessHero from "./BusinessHero";
import "../css/Business.css";
import BusinessSection from "./BusinessSection";
import BusinessHero1 from "./BusinessHero1";
import Footer from "./Footer";

function Business(){
  return (
    <div>
      <Header/>
      <BusinessHero/>
        <div className="business">
  <h2>Business Support Services</h2>
  <h1>
   We have the knowledge and expertise to provide you with relevant information. These are the services that we offer:
  </h1>
</div>
<BusinessSection/>
<BusinessHero1/>
<Footer/>
    </div>
  );
}
export default Business;