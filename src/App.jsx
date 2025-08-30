import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from "./Components/Service";
import Market from "./Components/Market";
import Business from "./Components/Business";
import Network from "./Components/Network";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Book from "./Components/Book";



function App() {
  return(
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/market" element={<Market/>} />
       <Route path="/business-support" element={<Business/>} />
       <Route path="/networking-events" element={<Network />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
    </div>
  )

}

export default App;
