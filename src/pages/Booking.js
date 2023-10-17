import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
function Booking() {
  const { flyingFrom, flyingTo, classes, tripType, returnDate, date } =
    useSelector((state) => state.mainReducer);
  console.log(tripType["one-way"]);
  //navigate
  const navigate = useNavigate();
  //get user
  const user = localStorage.getItem("user");
  console.log(user);
  const userData = user ? JSON.parse(user) : null;
  console.log(userData.User);
  const email = userData.User;

  const [isBooked, setIsBooked] = useState(false);
  const hello = {
    status: true,
    timestamp: 1696993705317,
    data: {
      flights: {
        noPriceLabel: "No price information",
        groups: [
          { id: "low", label: "$" },
          { id: "medium", label: "$$" },
          { id: "high", label: "$$$" },
        ],
        days: [
          { day: "2023-10-12", group: "medium", price: 343.97 },
          { day: "2023-10-14", group: "medium", price: 343.97 },
          { day: "2023-10-15", group: "medium", price: 343.97 },
          { day: "2023-10-17", group: "medium", price: 343.97 },
          { day: "2023-10-18", group: "medium", price: 344.4 },
          { day: "2023-10-19", group: "medium", price: 344.4 },
          { day: "2023-10-20", group: "medium", price: 343.97 },
          { day: "2023-10-21", group: "medium", price: 343.97 },
          { day: "2023-10-22", group: "high", price: 744.24 },
          { day: "2023-10-23", group: "medium", price: 343.97 },
          { day: "2023-10-24", group: "medium", price: 343.97 },
          { day: "2023-10-25", group: "medium", price: 344.38 },
          { day: "2023-10-26", group: "medium", price: 343.97 },
          { day: "2023-10-27", group: "medium", price: 344.38 },
          { day: "2023-11-02", group: "low", price: 342.8 },
          { day: "2023-11-03", group: "medium", price: 343.97 },
          { day: "2023-11-04", group: "low", price: 343.71 },
          { day: "2023-11-09", group: "low", price: 343.23 },
          { day: "2023-11-10", group: "low", price: 342.8 },
          { day: "2023-11-12", group: "medium", price: 343.97 },
          { day: "2023-11-14", group: "low", price: 343.23 },
          { day: "2023-11-15", group: "low", price: 343.23 },
          { day: "2023-11-18", group: "low", price: 343.23 },
          { day: "2023-11-22", group: "low", price: 343.71 },
          { day: "2023-11-24", group: "medium", price: 343.97 },
          { day: "2023-11-25", group: "medium", price: 343.97 },
          { day: "2023-11-27", group: "medium", price: 345.22 },
          { day: "2023-11-29", group: "medium", price: 343.97 },
          { day: "2023-11-30", group: "medium", price: 390.02 },
          { day: "2023-12-05", group: "medium", price: 390.02 },
          { day: "2023-12-08", group: "high", price: 677.07 },
          { day: "2023-12-09", group: "high", price: 677.07 },
          { day: "2023-12-10", group: "high", price: 677.07 },
          { day: "2023-12-11", group: "medium", price: 390.02 },
          { day: "2023-12-12", group: "medium", price: 390.02 },
          { day: "2023-12-13", group: "medium", price: 389.24 },
          { day: "2023-12-14", group: "medium", price: 401.87 },
          { day: "2023-12-15", group: "high", price: 453.23 },
          { day: "2023-12-16", group: "high", price: 453.23 },
          { day: "2023-12-20", group: "high", price: 437.12 },
          { day: "2023-12-26", group: "medium", price: 405.44 },
          { day: "2023-12-28", group: "high", price: 676.22 },
          { day: "2024-01-13", group: "high", price: 557.37 },
          { day: "2024-01-15", group: "high", price: 436.97 },
          { day: "2024-01-21", group: "high", price: 502.14 },
          { day: "2024-01-22", group: "high", price: 450.66 },
          { day: "2024-01-24", group: "medium", price: 354.8 },
          { day: "2024-03-20", group: "medium", price: 359.13 },
          { day: "2024-03-23", group: "medium", price: 385.47 },
          { day: "2024-07-27", group: "medium", price: 396.19 },
        ],
        currency: "USD",
      },
    },
  };
  const prices = hello.data.flights.days.map((day) => day.price);

  // Select a random price from the prices array
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];

  const price = Math.floor(randomPrice * 100); // Converts 343.78 to 34378
  console.log(price);
  const handleBooking = () => {
    setIsBooked(true);
  };
  const config = {
    reference: new Date().getTime().toString(),
    email: `${email}`,
    amount: price, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_aa9595381d858c49d21f6378ac51c418418dec90",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // Convert the object to a JSON string before storing
    localStorage.setItem("transid", JSON.stringify(reference.reference));
    if (reference) {
      navigate("/success");
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Click to Make Payment
        </button>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div
        class="row container mx-auto p-5 rounded-4 "
        style={{
          marginTop: "10rem",
          marginBottom: "15rem",
          height: "30%",
          background: "rgba(137, 137, 177, 0.823)",
        }}
      >
        <div class="row container text-center p-2">
          <div class="col-4">
            <h1>{flyingFrom}</h1>
            <p>{date}</p>
          </div>
          <div class="col-md-6">
            <img
              style={{ marginRight: "10px" }}
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/airplane-mode-on.png"
              alt="airplane-mode-on"
            />
            {tripType["one-way"] ? (
              <>
                <span
                  className="border rounded fs-5 p-2"
                  style={{ color: "rgb(8, 10, 95)" }}
                >
                  One Way
                </span>
              </>
            ) : (
              <>
                {" "}
                <span className="text-success">Two Way</span>
              </>
            )}
          </div>
          <div class="col-4">
            <h1>{flyingTo}</h1>
            <p>{returnDate}</p>
          </div>
        </div>
        <div class="row p-2 text-center">
          <div class="col">
            <h1>{randomPrice} naira</h1>
          </div>
          <div className="col">
            <p class="fs-4">Class: {classes}</p>
          </div>
          <div className="col">
            {!isBooked ? (
              <button
                type="button"
                className="btn bg-info text-white col-md-6"
                onClick={handleBooking}
              >
                Book
              </button>
            ) : (
              <Link
                type="button"
                className="btn bg-primary text-white col-md-6 text-whitenpm"
                onClick={handleBooking}
              >
                Booked <PaystackHookExample />
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color-glass/48/ok--v1.png"
                  alt="ok--v1"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
