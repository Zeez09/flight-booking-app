import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Checkin from "../Checkin.js";
import "../App.css";
import "../Custom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import flight from '../images/icons8-airplane-take-off-24.png';
import axios from "axios";

function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bookingRef, setBookingRef] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [error, setError] = useState('');

  const handleBookingRefChange = (e) => {
    setBookingRef(e.target.value)};

    const handleCheckIn = (e) => {
      e.preventDefault();
      try{
        axios.get("http://localhost:9000/api/fetchdata").then((res) => {
          const user = res.data.users
          if (user) {
            user.filter((data) => {
              console.log(data, bookingRef);
              
            })
          }

        })
      } catch (e) {}}
    

  const generateBookingRef = (e) => {
        const characters = '^[A-Za-z0-9]{9}$'
        let result = '';
        for (let i = 0; i < 9; i++) {
          result += characters.charAt(Math.floor(Math.random()*characters.length));
        }
        setBookingRef(result);
    }


    const getBookingRef = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setBookingRef(data.bookingRef);
        setError('');
      } catch (err) {
        console.error('Error fetching booking number:', err);
        setError('Failed to fetch booking number');
      }
    };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };
  //check user in database
  const user = localStorage.getItem("user");

  const userData = user ? JSON.parse(user) : null;

  const username = userData ? userData.User : "please Login to book flight";
  //handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scroll down
        document.querySelector(".navbar").style.top = "-70px"; // Adjust the value as needed
      } else {
        // Scroll up
        document.querySelector(".navbar").style.top = "0";
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  const response = () => localStorage.removeItem("user");

  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          {/* <img src={} alt=""/> */}
          <Link class="navbar-brand text-white" to="/">
            <FontAwesomeIcon icon={faPlane} class="text-white" /> MQ'S FLIGHTS
          </Link>

          <button
            style={{ border: "1px white solid" }}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                MQ'S FLIGHT
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item m-3">
                  <Link
                    type="button"
                    class="nav-link active btn btn-outline-light text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <form className="nav-item m-3" onSubmit={handleCheckIn}>
                  <Link
                    type="button"
                    className="nav-link active btn btn-outline-light text-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#checkinModal"
                  >
                    Check In
                  </Link>
                  <div
                    className="modal fade bg-secondary modal-bg"
                    id="checkinModal"
                    tabIndex="-1"
                    aria-labelledby="checkinModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg modal-fullscreen-sm-down">
                      <div className="modal-content bg-dark">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-4"
                            id="checkinModalLabel"
                          >
                            CHECK IN
                          </h1>
                          <button
                            type="button"
                            className="btn-close bg-danger"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="form-floating text-dark mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="bookingRefInput"
                            placeholder="Booking Reference"
                            value={bookingRef}
                            // onClick={getBookingRef}
                            onChange={handleBookingRefChange}
                            />
                          </div>
                          <div className="d-grid gap-2 col-6 mx-auto">
                            <button
                              className="btn btn-primary col-md-5 m-2 "
                             type="submit"
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <li class="nav-item m-3 dropdown dropstart">
                  <a
                    class="nav-link bg-white text-center dropdown-toggle border rounded"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
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
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/twitter--v1.png"
                              alt="twitter--v1"
                            />
                          </a>
                          <a href="" target="_blank" rel="noopener noreferrer">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/tiktok--v1.png"
                              alt="tiktok--v1"
                            />
                          </a>
                          <Link
                            to=" https://instagram.com/i2_reality?igshid=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/instagram-new--v1.png"
                              alt="instagram-new--v1"
                            />
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                {userData ? (
                  <li class="nav-item m-3 dropdown dropstart">
                    <button
                      class="nav-link bg-white text-center dropdown-toggle border rounded"
                      onClick={response}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li class="nav-item m-3 dropdown dropstart">
                    <Link
                      class="nav-link bg-white text-center dropdown-toggle border rounded"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
