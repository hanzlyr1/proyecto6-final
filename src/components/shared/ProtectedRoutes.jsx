import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  //siempre usamos el outlet
  if (localStorage.getItem("token")) {
    //estoy legueado
    return <Outlet />;
  } else {
    //no estoy logueado
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
