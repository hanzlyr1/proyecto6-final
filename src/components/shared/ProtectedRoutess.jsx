import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProtectedRoutess = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default ProtectedRoutess;
