import React from "react";
import abuja from "../images/abuja-destination.png";
import akure from "../images/akure-destination.jpg";
import pharcourt from "../images/portharcourt-destination.png";
import "../App.css";

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
              At MQ's Flights, we believe that the world is a boundless adventure waiting to be explored. Our goal is to connect travellers with their dream destinations, whether it's the vibrant streets of a bustling city, the tranquile shores of an exotic beach, or the magestic heights of a far-off mountain range.
              We are committed to providing access to a diverse array of destinations, fostering a love for travel, discovery, and cultural exploration. With us, every journey is an opportunity to make unforgettable memories, and we are here to help you embark on your next incredible adventure.
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
          <span style={{ borderBottom: "1px solid purple" }}>Mission</span>
        </h2>
        <div class="row align-items-center mt-3">
          <div class="col-lg-6">
            <p>
              At MQ's Flights, our mission is to simpplify and enhance the travel experience. We are committed to providing travellers with a user-centric platform that offers comprehensive, secure, and eco-conscious travel solutions.Through innovation and dedication, we aim to deliver an app that empowers users to explore the world with confidence and convenience. Our mission is to make travel planning a delightful journey in itself, marked by personalization, data security, and enviromentally-friendly choices.
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
