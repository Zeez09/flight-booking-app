import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../App.css";
import "../Custom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bookingRef, setBookingRef] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [error, setError] = useState("");

  const handleBookingRefChange = (e) => {
    setBookingRef(e.target.value);
  };

  const handleCheckIn = (e) => {
    e.preventDefault();
    try {
      axios
        .get("https://flight-booking-app-backend-production.up.railway.app/api/fetchdata")
        .then((res) => {
          const user = res.data.users;
          if (user) {
            user.filter((data) => {
              console.log(data, bookingRef);
            });
          }
        });
    } catch (e) {}
  };

  const user = localStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;
  const username = userData ? userData.User : "please Login to book flight";

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        document.querySelector(".navbar").style.top = "-70px";
      } else {
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
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <FontAwesomeIcon icon={faPlane} className="text-white" /> MQ'S FLIGHTS
          </Link>

          <button
            style={{ border: "1px white solid" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                MQ'S FLIGHT
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item m-3">
                  <Link
                    className="nav-link active btn btn-outline-light text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                {/* Check In Button */}
                <li className="nav-item m-3">
                  <button
                    type="button"
                    className ="nav-link bg-white text-center dropdown-toggle border rounded w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#checkinModal"
                  >
                    Check In
                  </button>
                </li>

                {/* Contact Us Dropdown */}
                <li className="nav-item m-3 dropdown dropstart">
                  <a
                    className="nav-link bg-white text-center dropdown-toggle border rounded"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact Us
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <div className="col mx-auto rounded p-5">
                        <div className="card-body text-center">
                          <h3 className="col-p slider-head">Contact Details</h3>
                          <p>Feel free to contact us with questions</p>
                          <div>
                            <b>Email:</b> wuesemimi@gmail.com
                          </div>
                          <a
                            href="https://twitter.com/_i2reality"
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
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/tiktok--v1.png"
                              alt="tiktok--v1"
                            />
                          </a>
                          <Link
                            to="https://instagram.com/i2_reality?igshid=MzRlODBiNWFlZA=="
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
                  <li className="nav-item m-3 dropdown dropstart">
                    <button
                      className="nav-link bg-white text-center dropdown-toggle border rounded"
                      onClick={response}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="nav-item m-3 dropdown dropstart">
                    <Link
                      className="nav-link bg-white text-center dropdown-toggle border rounded"
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

      {/* MODAL OUTSIDE NAVBAR */}
      <div
        className="modal fade modal-bg"
        id="checkinModal"
        tabIndex="-1"
        aria-labelledby="checkinModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="checkinModalLabel">CHECK IN</h1>
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
                  onChange={handleBookingRefChange}
                />
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="btn btn-primary col-md-5 m-2"
                  type="button"
                  onClick={handleCheckIn}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
