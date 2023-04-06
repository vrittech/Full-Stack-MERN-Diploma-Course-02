import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar";

export default function UserLayout() {
  const { isUserLoggedIn, userData } = useSelector((state) => state.user);
  const location = useLocation();
  if (
    isUserLoggedIn &&
    userData?.userType === "admin" &&
    location.pathname === "/login"
  ) {
    return <Navigate to={location?.state?.path || "/"} />;
  }

  if (isUserLoggedIn && location.pathname === "/login") {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
