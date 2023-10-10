import React, { useState } from "react";

import './App.css'

function Form() {
    const [tripType, setTripType] = useState(["one-way"]);
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
  
    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
      if (e.target.value === "one-way") {
        setReturnDate("");
      }
    };
  
    const handleDepartureDateChange = (e) => {
      setDepartureDate(e.target.value);
    };
  
    const handleReturnDateChange = (e) => {
      setReturnDate(e.target.value);
    };

  return (
<>
<form class="row g-3 mx-auto text-dark my-5">
                <div class="input-group mb-3">
                    <button class="btn text-white bg-secondary btn-outline-white" style={{borderRight:'1px solid black'}}  type="button">PayiN</button>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
           
                    <div class="col-12 d-flex justify-content-around">
                        <div class="row form-check form-switch">
                            <input class="form-check-input" type="radio" name="trip-type" value="one-way" checked={tripType.includes("one-way")}
                            onChange={handleTripTypeChange}/>
                            <label class="form-check-label" for="trip-type">One Way</label>
                        </div>
                        <div class="row form-check form-switch">
                            <input class="form-check-input" type="radio" name="trip-type" value="round-trip"  checked={tripType.includes("round-trip")}
                            onChange={handleTripTypeChange}/>
                            <label class="form-check-label" for="trip-type">Round Trip</label>
                        </div>
                    </div>
             
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Flying from:</label>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Flying to:</label>
                    <input type="text" class="form-control" id="inputFlyingto"/>
                </div>
            
                    <div class="col-md-6">
                    <label for="departureDate" class="form-label">Departure date:</label>
                    <input
                    class="form-control"
                    type="date"
                    value={departureDate}
                    onChange={handleDepartureDateChange}
                    />

                    </div>
                {tripType.includes("round-trip") && (
                    <div class="col-md-6">
                        <label  for="returnDate" class="form-label">Return date:</label>
                        <input
                        class="form-control"
                        type="date"
                        value={returnDate}
                        onChange={handleReturnDateChange}
                        />
                    </div>
                )}

                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Adult</label>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>1 Adult(12yrs+)</option>
                    <option value="1">2 Adult(12yrs+)</option>
                    <option value="2">3 Adult(12yrs+)</option>
                    <option value="3">4 Adult(12yrs+)</option>
                    <option value="4">5 Adult(12yrs+)</option>
                    <option value="5">6 Adult(12yrs+)</option>
                    <option value="6">7 Adult(12yrs+)</option>
                    <option value="7">8 Adult(12yrs+)</option>
                </select>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Child</label>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>0 Child</option>
                    <option value="1">1 Child</option>
                    <option value="2">3 Child(2-11yrs)</option>
                    <option value="3">4 Child(2-11yrs)</option>
                    <option value="4">5 Child(2-11yrs)</option>
                    <option value="5">6 Child(2-11yrs)</option>
                    <option value="6">7 Child(2-11yrs)</option>
                    <option value="7">8 Child(2-11yrs)</option>
                </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Infant</label>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>0 Infant</option>
                    <option value="1">1 Infant</option>
                    <option value="2">3 Infant(&lt;2yrs)</option>
                    <option value="3">4 Infant(&lt;2yrs)</option>
                    <option value="4">5 Infant(&lt;2yrs)</option>
                </select>
                </div>
                <div className="text-end">
                <button type="submit" class="btn btn-primary col-3 m-2">Book Flight</button>
                </div>
        </form>
</>
  )
}

export default Form