import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const PrivateUsers = () => {
  const loggedInStatus = sessionStorage.getItem("isLoggedIn");

  if (loggedInStatus === "true") {
    return (
      <>
        <Outlet />
      </>
    );
  } else return <Navigate to="/" />;
};

export default PrivateUsers;
