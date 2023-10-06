import React, { useState } from "react";
import banner from './images/main-banner.png'
import abuja from './images/abuja-destination.png'
import akure from './images/akure-destination.jpg'
import pharcourt from './images/portharcourt-destination.png'
import './App.css'

function Home() {
   
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
    <div className="page-wrap">
        <div className="main-header container text-center" style={{border:'red solid 1px'}}>
            <div class="row justify-content-md-around">
                <div class="col col-lg-2 d-flex align-items-center">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img width="64" height="64" src="https://img.icons8.com/cute-clipart/64/000000/airplane-take-off.png" alt="airplane-take-off"/>
                            Flight App
                        </a>
                    </div>
                </div>
                <div class="col-md-8">
                        <div class="row row-cols-1 row-cols-sm-12 row-cols-md-12 d-flex justify-content-around align-items-center">
                            <div class="col-4">CHECK-IN</div>
                             <div class="col-4">MY BOOKINGS</div>
                            <div class="col-4">INFORMATION</div>
                        </div>
                </div>
            </div>
        </div>


        <div style={{width:'80%', margin:'0 auto'}}>
            <img src={banner} style={{maxHeight: '80vh'}} alt="main-banner" className="img-fluid"/>
        </div>


        <div className="container text-center" style={{border:'red solid 1px'}}>
            <form class="row g-3 mx-auto text-white" style={{width: '60%'}}>
                <div class="input-group mb-3">
                    <button class="btn text-dark bg-white btn-outline-white" type="button">PayiN</button>
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
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Child</label>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Infant</label>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <button type="submit" class="btn btn-primary col-5 m-2">Book Flight</button>
            </form>
        </div>


        <div style={{width:'60%', margin:'0 auto', display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
            <img src={pharcourt} style={{maxHeight: '111vh', width:'60%'}} alt="abuja"/>
            <div style={{width:'40%', marginLeft: '30px'}} >
                <img src={abuja} style={{maxHeight: '60vh', width:'100%'}} alt="abuja"/>
                <img src={akure} style={{maxHeight: '60vh', width:'100%'}} alt="abuja"/>
            </div>
        </div>


        <footer class="footer bg-primary text-white">
        <div class="container text-white">
            <div class="row text-white">
            <div class="col-md-4">
                <img src="logo.png" alt="Logo" class="img-fluid"/>
                <h5 class="mt-3">Follow us</h5>
                <ul class="list-group list-unstyled social-media-icons list-group-horizontal">
                <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/></a></li>
                <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/color/48/tiktok--v1.png" alt="tiktok--v1"/></a></li>
                <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/></a></li>
                <li><a href="#"><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a></li>
                </ul>
            </div>

            <div class="col-md-4">
                <h5>ABOUT MQ's FLIGHT</h5>
                <ul class="list-unstyled text-white">
                <li><a href="#" class="text-white">Contact</a></li>
                <li><a href="#" class="text-white">Our team</a></li>
                <li><a href="#" class="text-white">Our services</a></li>
                <li><a href="#" class="text-white">Careers</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h5>SUPPORT</h5>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Contact</a></li>
                <li><a href="#" class="text-white">Terms and Conditions</a></li>
                <li><a href="#" class="text-white">Offices</a></li>
                <li><a href="#" class="text-white">FAQs</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h5>COMPANY INFORMATION</h5>
                <ul class="list-unstyled">
                <li><i class="bi bi-envelope"></i> email@example.com</li>
                <li><i class="bi bi-phone"></i> +1 555 555-5555</li>
                <li><i class="bi bi-phone"></i>lorem isv uvkvkuivfv vvu vsycv</li>
                </ul>
            </div>
            </div>

            <div class="row mt-5">
            <div class="col-md-12 text-center">
                <p class="copyright">Copyright &copy; 2023 Example Company</p>
            </div>
            </div>
        </div>
        </footer>

    </div>
    </>
  );
}

export default Home;