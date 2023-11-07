import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getLocalData } from "../Utiils/localStorage";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((store) => store.isAuth);
  const location = useLocation();
  let token = getLocalData("token");

  if (!token) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;