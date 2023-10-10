import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../utils/actions";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState(""); // State for selected currency
  const [flyingFrom, setFlyingFrom] = useState(""); // State for Flying From input
  console.log(flyingFrom);
  const [flyingTo, setFlyingTo] = useState(""); // State for Flying To input
  console.log(flyingTo);
  const [adultCount, setAdultCount] = useState(1); // State for Adult count
  const [childCount, setChildCount] = useState(0); // State for Child count
  const [infantCount, setInfantCount] = useState(0); // State for Infant count
  const [classes, setClasses] = useState("");
  const [tripType, setTripType] = useState({
    "one-way": true,
    "round-trip": false,
  });
  console.log(tripType["one-way"]);
  const [returnDate, setReturnDate] = useState("");
  console.log(returnDate);
  const [date, setDate] = useState("");
  console.log(date);
  const [datas, setData] = useState("");
  console.log(datas);
  const data = {
    flyingFrom,
    flyingTo,
  };
  const handleTripTypeChange = (e) => {
    const { value } = e.target;
    setTripType({
      ...tripType,
      "one-way": value === "one-way",
      "round-trip": value === "round-trip",
    });
  };
  const handleFlyingFromChange = (e) => {
    setFlyingFrom(e.target.value);
  };
  const handleFlyingFromChange2 = (e) => {
    setFlyingTo(e.target.value);
  };
  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleFlightClassChange = (e) => {
    setClasses(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    Promise.resolve(
      dispatch(
        setData(
          selectedCurrency,
          flyingFrom,
          flyingTo,
          adultCount,
          childCount,
          infantCount,
          classes,
          tripType,
          returnDate,
          date
        )
      )
    ).then(() => {
      navigate("/");
      // Redirect to payment page
    });
  };

  return (
    <>
      <form
        class="row g-3 mx-auto text-dark containe-fluid my-5"
        onSubmit={handleFormSubmit}
      >
        <div className="input-group mb-3">
          <button
            className="btn text-dark bg-white btn-outline-white"
            style={{ borderRight: "1px solid black" }}
          >
            Currency
          </button>
          <select
            className="form-select"
            aria-label="Currency Selector"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="">Currency</option>
            <option value="Naira">Naira</option>
            {/* Add more currency options as needed */}
          </select>
        </div>
        <div class="col-12 d-flex justify-content-around">
          <div class="row form-check form-switch">
            <input
              class="form-check-input"
              type="radio"
              name="trip-type"
              value="one-way"
              checked={tripType["one-way"]}
              onChange={handleTripTypeChange}
            />
            <label class="form-check-label" for="trip-type">
              One Way
            </label>
          </div>
          <div class="row form-check form-switch">
            <input
              class="form-check-input"
              type="radio"
              name="trip-type"
              value="round-trip"
              checked={tripType["round-trip"]}
              onChange={handleTripTypeChange}
            />
            <label class="form-check-label" for="trip-type">
              Round Trip
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputFlyingFrom" className="form-label">
            Flying From:
          </label>
          <select
            className="form-select"
            id="inputFlyingFrom"
            value={flyingFrom}
            onChange={handleFlyingFromChange}
          >
            <option value=""></option>
            <option value="New York">LOS</option>
            <option value="London">ABV</option>
            <option value="Paris">PHC</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputFlyingFrom" className="form-label">
            Flying To:
          </label>
          <select
            className="form-select"
            id="inputFlyingFrom"
            value={flyingTo}
            onChange={handleFlyingFromChange2}
          >
            <option value=""></option>
            <option value="New York">KAN</option>
            <option value="London">LOS</option>
            <option value="Paris">ENU</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div class="col-md-6">
          <label for="returnDate" class="form-label">
            Date:
          </label>
          <input
            class="form-control"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        {tripType["round-trip"] ? (
          <div className="col-md-6">
            <label htmlFor="returnDate" className="form-label">
              Return date:
            </label>
            <input
              className="form-control"
              type="date"
              value={returnDate}
              onChange={handleReturnDateChange}
            />
          </div>
        ) : null}

        <div className="col-12">
          <label htmlFor="inputFlightClass" className="form-label">
            Select Flight Class:
          </label>
          <select
            className="form-select"
            id="inputFlightClass"
            value={classes}
            onChange={handleFlightClassChange}
          >
            <option value="">Select class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputAdult" className="form-label">
            Adult
          </label>
          <select
            className="form-select"
            id="inputAdult"
            aria-label="Select Adult Count"
            value={adultCount}
            onChange={(e) => setAdultCount(parseInt(e.target.value))}
          >
            {/* Options for Adult count */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
              <option key={count} value={count}>
                {count} Adult({count > 1 ? "s" : ""} 12yrs+)
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputChild" className="form-label">
            Child
          </label>
          <select
            className="form-select"
            id="inputChild"
            aria-label="Select Child Count"
            value={childCount}
            onChange={(e) => setChildCount(parseInt(e.target.value))}
          >
            {/* Options for Child count */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
              <option key={count} value={count}>
                {count} Child({count > 1 ? "ren" : ""} 2-11yrs)
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputInfant" className="form-label">
            Infant
          </label>
          <select
            className="form-select"
            id="inputInfant"
            aria-label="Select Infant Count"
            value={infantCount}
            onChange={(e) => setInfantCount(parseInt(e.target.value))}
          >
            {/* Options for Infant count */}
            {[0, 1, 2, 3, 4, 5].map((count) => (
              <option key={count} value={count}>
                {count} Infant(s) (&lt;2yrs)
              </option>
            ))}
          </select>
        </div>
        <div className="text-end">
          <button type="submit" class="btn btn-primary col-3 m-2">
            Book Flight
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
