import React, { useState } from "react";
import "./Navbar.css";
import ListItems from "./ListItems";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <ListItems />
      </div>
    </>
  );
}
