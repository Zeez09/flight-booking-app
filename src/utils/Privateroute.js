import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const loginauth = window.localStorage.getItem("user");
  const auths = JSON.parse(loginauth);
  console.log(auths);

  return auths && auths.User ? <Outlet /> : navigate("/");
};

export default PrivateRoute;
