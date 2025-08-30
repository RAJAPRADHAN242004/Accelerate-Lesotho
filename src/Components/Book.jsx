import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../css/Book.css";
// import book from "../assets/book.jpg"; // Add a relevant consultation background image
// import Header from "./Header";
// import { useNavigate } from "react-router-dom";

function Book() {

  const navigate = useNavigate();


  useEffect(() => {
    // Open Calendly in new tab
    window.open(
      "https://calendly.com/acceleratelesotho-marketing/30min",
      "_blank",
      "noopener,noreferrer"
    );

    // Redirect current tab to homepage
    navigate("/");
  }, [navigate]);

  return null; // nothing to render
};


  // const [booked, setBooked] = useState(false);
  // const navigate = useNavigate();

  // const handleBooking = (e) => {
  //   e.preventDefault();
  //   setBooked(true);

  //   setTimeout(() => {
  //     navigate("/");
  //   }, 2000);
  // };

  // return (
  //   <>
  //     <Header />
  //     <div
  //       className="consult-section"
  //       style={{ backgroundImage: `url(${book})` }}
  //     >
  //       <div className="consult-overlay">
  //         <div className="consult-content">
  //           <h1 className="consult-title">Book a Consultation</h1>
  //           <p className="consult-subtitle">
  //             Let us help accelerate your business. Schedule your one-on-one consultation below.
  //           </p>

  //           {booked ? (
  //             <div className="success-message">
  //               🎉 Booking confirmed! Redirecting to home...
  //             </div>
  //           ) : (
  //             <form className="consult-form" onSubmit={handleBooking}>
  //               <input type="text" placeholder="Full Name" required />
  //               <input type="email" placeholder="Email Address" required />
  //               <input type="tel" placeholder="Phone Number" required />
  //               <input type="datetime-local" required />
  //               <textarea placeholder="Brief about your needs..." rows="4" />
  //               <button type="submit" className="consult-button">
  //                 Book Now
  //               </button>
  //             </form>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
// }

export default Book;
