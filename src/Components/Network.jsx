import Footer from "./Footer";
import Header from "./Header";
import NetworkHero from "./NetworkHero";
import NetworkHero1 from "./NetworkHero1";
import "../css/Network.css";

function Network() {
  return (
    <div>
      <Header/>
      <NetworkHero/> 
       <div className="network">
  <h2>Networking Events</h2>
  <h1>
   We have the knowledge and expertise to provide you with relevant information. These are the services that we offer:
  </h1>
</div>
      <NetworkHero1/>
      <Footer/>
    </div>
  );
}
export default Network;