import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// import axiosInstance from "../utils/axios";
import axios from "axios";
import "./Register.css";
import Navbar from "../component/Navbar";
import LoadingSpinner from "../component/Loading";
import Footer from "../component/Footer";

const Signup = (onSignup) => {
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    email: "",
    username: "",
    password: "",
  };
  function isRequired(value) {
    return value != null && value.trim().length > 0;
  }

  function isSame(value1, value2) {
    return value1 === value2;
  }

  const validations = [
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
    ({ username }) =>
      isRequired(username) || { username: "username is required" },
    ({ password }) =>
      isRequired(password) || { password: "Password is required" },
    ({ password, confirmPassword }) =>
      isSame(password, confirmPassword) || {
        confirmPassword: "Passwords do not match",
      },
  ];
  const { values, isValid, errors, touched, changeHandler } = useForm(
    initialState,
    validations,
    onSignup
  );

  function useForm(initialState = {}, validations = []) {
    function validate(validations, values) {
      const errors = validations
        .map((validation) => validation(values))
        .filter((validation) => typeof validation === "object");
      return {
        isValid: errors.length === 0,
        errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
      };
    }
    const { isValid: initialIsValid, errors: initialErrors } = validate(
      validations,
      initialState
    );
    const [values, setValues] = useState(initialState);

    const [errors, setErrors] = useState(initialErrors);

    const [isValid, setValid] = useState(initialIsValid);
    const [touched, setTouched] = useState({});

    const changeHandler = (event) => {
      const newValues = { ...values, [event.target.name]: event.target.value };
      console.log(newValues);
      const { isValid, errors } = validate(validations, newValues);
      setValues(newValues);
      setValid(isValid);
      setErrors(errors);
      setTouched({
        ...touched,
        [event.target.name]: true,
      });
    };
    return { values, changeHandler, isValid, errors, touched };
  }
  const form = useRef(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, username, password } = values;
    console.log(email);
    try {
      let res = await axios.post(
        `https://flight-app-backend.onrender.com/api/signup/`,
        {
          email: email,
          username: username,
          password: password,
        }
      );
      if (res.data) {
        setIsLoading(true);
      }

      setTimeout(() => (window.location.href = "/login"), 3000);
    } catch (err) {
      console.log(err);
    }
    form.current.reset();
  };

  return (
    <>
      <Navbar />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="card mx-auto mb-5 d-flex justify-content-center align-items-center Signin">
          <div className="card-body">
            <div className="signup-container">
              <div className="mx-auto">
                <h2 className="mt-5 text-center mx-auto reg">
                  Create an account
                </h2>
                <p className="existing-user">
                  Have an account? Click to
                  <span>
                    {" "}
                    <Link to="/login" className="sign-up-link">
                      LOGIN
                    </Link>{" "}
                  </span>
                </p>
                <form
                  ref={form}
                  className="signup-form"
                  onSubmit={submitHandler}
                  method="post"
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      onChange={changeHandler}
                      name="username"
                      value={values.username}
                    />
                  </div>
                  {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                  )}

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      onChange={changeHandler}
                      name="email"
                      value={values.email}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control input"
                      id="password"
                      placeholder="Password"
                      onChange={changeHandler}
                      name="password"
                      value={values.password}
                    />
                  </div>
                  {touched.Password && errors.Password && (
                    <p className="error">{errors.Password}</p>
                  )}
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control input"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={changeHandler}
                      name="confirmPassword"
                      value={values.confirmPassword}
                    />
                  </div>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary form-control"
                  >
                    REGISTER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Signup;
