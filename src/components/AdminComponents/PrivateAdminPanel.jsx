import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const PrivateAdminPanel = () => {
  const loggedInStatus = sessionStorage.getItem("AdminisLoggedIn");
  if (loggedInStatus === "true") {
    return (
      <>
        <Outlet />
      </>
    );
  } else return <Navigate to="/admin" />;
};

export default PrivateAdminPanel;
