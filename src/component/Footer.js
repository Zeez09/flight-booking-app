import React from "react";
import "../App.css";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="footer container-fluid text-white m-0 px-5 pt-5">
        <div class="row text-white">
          <div class="col-md-4">
            <Link
              class="navbar-brand border p-3 rounded mb-3 text-white"
              to="/"
            >
              <FontAwesomeIcon icon={faPlane} class="text-white" /> MQ'S FLIGHTS
            </Link>
            <h5 class="mt-3">Follow us</h5>
            <ul class="list-group list-unstyled social-media-icons list-group-horizontal">
              <li>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/facebook.png"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/tiktok--v1.png"
                    alt="tiktok--v1"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/twitter--v1.png"
                    alt="twitter--v1"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-4">
            <h5>ABOUT MQ's FLIGHT</h5>
            <ul class="list-unstyled text-white">
              <li>
                <a href="#" class="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  Our team
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  Our services
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>SUPPORT</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  Offices
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>MQ's Flight</h5>
            <ul class="list-unstyled">
              <li>
                <i class="bi bi-envelope"></i> wuesemimi@gmail.com
              </li>
              <li>
                <i class="bi bi-phone"></i>+234 815 272 39
              </li>
            </ul>
          </div>
        </div>

        <div class="row mt-5">
          <div
            class="col-md-12 pt-3 text-center"
            style={{ borderTop: "1px solid darkcyan" }}
          >
            <p class="copyright">Copyright &copy; 2023 MQ's Flight</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
