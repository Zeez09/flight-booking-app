import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

function Checkin() {
  return (
    <>
      <Navbar />
      <div id="go" class="py-5 mx-auto col-md-5">
        <h1 class="text-center pb-2 fs-4">CHECK-IN</h1>
        <form class="g-3 mx-auto border">
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <Link type="button" class="btn btn-success mt-5" to="">
              Search
            </Link>
          </div>
        </form>
      </div>

      <div class="card-group col-md-10 mx-auto rounded p-2">
        <div class="card p-5 border-none mb-5">
          <img
            class="mx-auto d-block"
            width="96"
            height="96"
            src="https://img.icons8.com/fluency-systems-regular/96/checked-laptop.png"
            alt="checked-laptop"
          />
          <div class="card-body">
            <p class="card-text text-center">
              Access the online check-in service by entering your booking
              credentials in the fields indicated.
            </p>
          </div>
        </div>
        <div class="card p-5 mb-5">
          <img
            class="mx-auto d-block"
            width="96"
            height="96"
            src="https://img.icons8.com/fluency-systems-regular/96/print.png"
            alt="print"
          />
          <div class="card-body">
            <p class="card-text text-center">
              Remember to download or print your boarding pass when you have
              completed the online check-in process.
            </p>
          </div>
        </div>
        <div class="card p-5 mb-5">
          <img
            class="mx-auto d-block"
            width="96"
            height="96"
            src="https://img.icons8.com/fluency-systems-regular/96/airplane-take-off.png"
            alt="airplane-take-off"
          />
          <div class="card-body">
            <p class="card-text text-center">
              You can also check-in at the airport 2 hours before departure.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkin;
