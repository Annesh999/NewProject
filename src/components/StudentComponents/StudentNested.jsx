import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function StudentNested() {
  let StudentLoggedin = sessionStorage.getItem("isLoggedIn");

  if (StudentLoggedin === "true") {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
