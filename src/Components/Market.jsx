import Header from "./Header";
import MarketHero from "./MarketHero";
import "../css/Market.css";
import MarketSection from "./MarketSection";
import MarketHero1 from "./MarketHero1";
import Footer from "./Footer";

function Market(){
  return (
    <div>
      <Header/>
      <MarketHero/>
        <div className="market">
  <h2>Market Entry</h2>
  <h1>
   We have the knowledge and expertise to provide you with relevant information. These are the services that we offer:
  </h1>
</div>
<MarketSection/>
<MarketHero1/>
<Footer/>
    </div>
  );
}
export default Market;