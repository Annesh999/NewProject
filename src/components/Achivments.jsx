import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaBagShopping, FaRegCalendarDays } from "react-icons/fa6";

import "./Achivmentss.css";

export default function Achivments() {
  return (
    <>
      <div className="Achivments-wrapper">
        <div className="Achivments">
          <p className="icon">
            <IoMdPerson />
          </p>
          <p className="count">1000+</p>
          <p className="text">Happy Customers</p>
        </div>

        <div className="Achivments">
          <p className="icon">
            <FaRegCalendarDays />
          </p>
          <p className="count">10+</p>
          <p className="text">Years in business</p>
        </div>

        <div className="Achivments">
          <p className="icon">
            <FaBagShopping />
          </p>
          <p className="count">1000+</p>
          <p className="text">Unique Projects </p>
        </div>
      </div>
    </>
  );
}
