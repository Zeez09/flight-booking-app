import React, { useEffect } from "react";
import { FcHome } from "react-icons/fc";

import { Link } from "react-router-dom";

function Success() {
  useEffect(() => {
    document.title = "MQ's Flight | Success";
  }, []);

  const generateBookingRef = () => {
          const characters = '^[A-Za-z0-9]{9}$'
          let result = '';
          for (let i = 0; i < 9; i++) {
            result += characters.charAt(Math.floor(Math.random()*characters.length));
          }
          return result;
      }
      const bookingRef = generateBookingRef();

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h1 className="text-center display-3 py-5">
            Booking is SuccessFull, Download your receipt from your email. Your booking Reference is: {bookingRef}
          </h1>
          <p className="py-3">
            Your flight booking has been received! We’re thrilled to assist you
            in planning your journey. Our booking team is diligently working on
            processing your reservation. Safe travels! ✈️
            <span role="img" aria-labelledby="emoji">
              🎉🎉🎉!
            </span>
          </p>

          <div className="text-center">
            <Link to="/" className="btn btn-normal btn-dark m-5">
              Back to Home <FcHome size={35} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
