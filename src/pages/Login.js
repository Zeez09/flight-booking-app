import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import LoadingSpinner from "../component/Loading";

function Login() {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    email,
    password,
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const form = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:9000/api/signin/", data)
        .then((res) => {
          // Redirect to payment page
          setIsLoading(true);
          if (res.data) {
            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            axios.defaults.headers["Authorization"] =
              "JWT " + localStorage.getItem("refresh_token");
            //set both tokens and user in local storage
            const message = {
              User: data.email,
              token: res.data,
            };
            //save data and token to local storage
            localStorage.setItem("user", JSON.stringify(message));

            setIsLoading(true);
            setTimeout(() => (window.location.href = "/"), 500);
          }
        });
    } catch (err) {}

    form.current.reset();
  };
  return (
    <>
      <Navbar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="g-3 mx-auto pt-5 mb-5 border col-md-5"
          style={{ marginTop: "15%" }}
        >
          <h2
            className="text-center pb-2 col-4 mx-auto"
            style={{ borderBottom: "green 2px solid" }}
          >
            MQ's Login
          </h2>
          <div className="col">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="col mt-5">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="row d-flex gap-2 col mx-auto">
            <div className="col">
              <Link
                type="button"
                className="btn btn-outline-secondary mt-5"
                to="/Register"
              >
                Or Sign Up
              </Link>
            </div>
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-success mt-5 col-12"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      )}

      <Footer />
    </>
  );
}

export default Login;
