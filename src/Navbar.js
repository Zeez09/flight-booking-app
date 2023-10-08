import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Checkin from './Checkin'
import './App.css'
import './Custom.scss'

function Navbar() {
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          // Scroll down
          document.querySelector('.navbar').style.top = "-70px"; // Adjust the value as needed
        } else {
          // Scroll up
          document.querySelector('.navbar').style.top = "0";
        }
        setLastScrollTop(st <= 0 ? 0 : st);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollTop]);
  return (
    <>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
        {/* <img src={} alt=""/> */}
    <a class="navbar-brand" href="#">MQ'S FLIGHT</a>

  
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MQ'S FLIGHT</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item m-3">
            <Link type="button" class="nav-link active btn btn-outline-light text-dark" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item m-3 dropdown">
          <Link type="button" class="nav-link active btn btn-outline-light text-dark" data-bs-toggle="modal" data-bs-target="#checkinModal">
             Check In
            </Link>


<div class="modal fade bg-secondary" id="checkinModal" tabindex="-1" aria-labelledby="checkinModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-fullscreen-sm-down">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="checkinModalLabel">CHECK IN</h1>
        <button type="button" class="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
      <div class="form-floating text-dark mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="Boooking Ref."/>
  <label for="floatingInut">Booking Reference</label>
</div>
<div class="form-floating text-dark ">
<input type="email" class="form-control" id="floatingInput" placeholder="address@gmail.com"/>
  <label for="floatingInput">Contact Email</label>
 
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <Link type="button" class="btn btn-success mt-5" to="/Checkin">
        Proceed
        </Link>
</div>

      </div>
   
    </div>
  </div>
</div>
          </li>
          <li class="nav-item m-3 dropdown">
      
            <Link type="button" class="nav-link active btn btn-outline-light text-dark" data-bs-toggle="modal" data-bs-target="#manageBooking">
                My Bookings
            </Link>


<div class="modal fade bg-secondary" id="manageBooking" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-fullscreen-sm-down">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="bookingModalLabel">Manage my Booking.</h1>
        <button type="button" class="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
      <h2 class="modal-title fs-5" id="exampleModalLabel">Enter your flight details to view your booking.</h2>
      <p class="blockquote-footer mt-3">Please input your 6 digit Booking Reference and email address used on your booking to retrieve your current flight information</p>
      <div class="form-floating text-dark mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="Boooking Ref."/>
  <label for="floatingInut">Booking Reference</label>
</div>
<div class="form-floating text-dark">
<input type="email" class="form-control" id="floatingInput" placeholder="address@gmail.com"/>
  <label for="floatingInput">Contact Email</label>

</div>
<div class="modal-footer mx-auto">
<button type="button" class="btn btn-secondary col-2" data-bs-dismiss="modal">Back</button>
        <button type="button" class="btn btn-success col-3">Confirm</button>
</div>
      </div>
    </div>
  </div>
</div>
          </li>
          <li class="nav-item m-3 dropdown dropstart">
             <a class="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact Us
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
              <div class="col mx-auto rounded p-5">
                      <div class="card-body text-center">
                        <h3 class="col-p slider-head">Contact Details</h3>
                        <p>Feel free to contact us with questions</p>
                        <div>
                          <b>Email:</b>wuesemimi@gmail.com
                        </div>
                        <a
                          href=" https://twitter.com/_i2reality?t=M9P-c8cdmekEYKiC-zuMiw&s=09"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                         <img width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/>
                        </a>
                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img width="48" height="48" src="https://img.icons8.com/color/48/tiktok--v1.png" alt="tiktok--v1"/>
                        </a>
                        <Link
                          to=" https://instagram.com/i2_reality?igshid=MzRlODBiNWFlZA=="
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                         <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                        </Link>
                      </div>
                    </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
        </nav>
    </>
  )
}

export default Navbar