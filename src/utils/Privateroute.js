import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const loginauth = window.localStorage.getItem("user");
  const auths = JSON.parse(loginauth);
  console.log(auths);

  return auths && auths.User ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
