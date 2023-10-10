import React from "react";
import abuja from "./images/abuja-destination.png";
import akure from "./images/akure-destination.jpg";
import pharcourt from "./images/portharcourt-destination.png";
import "./App.css";

function Carousel() {
  return (
    <>
      <div
        class="container mx-auto my-5 bg-light rounded p-5"
        style={{ width: "80%", backgroundColor: "#ffff" }}
      >
        <h2>
          Our{" "}
          <span style={{ borderBottom: "1px solid purple" }}>Destinations</span>
        </h2>
        <div class="row align-items-center mt-3">
          <div class="col-lg-6">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="5000"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={pharcourt} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={abuja} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={akure} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-lg-6">
            <p>
              Your paragraph of text goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed id velit justo. Curabitur
              efficitur, lectus sit amet ultricies tincidunt, libero leo
              ultricies ligula, vel laoreet arcu est vel quam. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
      <div
        class="container mx-auto my-5 bg-light rounded p-5"
        style={{ width: "80%", backgroundColor: "#ffff" }}
      >
        <h2>
          Our{" "}
          <span style={{ borderBottom: "1px solid purple" }}>Destinations</span>
        </h2>
        <div class="row align-items-center mt-3">
          <div class="col-lg-6">
            <p>
              Your paragraph of text goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed id velit justo. Curabitur
              efficitur, lectus sit amet ultricies tincidunt, libero leo
              ultricies ligula, vel laoreet arcu est vel quam. Nulla facilisi.
            </p>
          </div>
          <div class="col-lg-6">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="5000"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={pharcourt} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={abuja} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={akure} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
