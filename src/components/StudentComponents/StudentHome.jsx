import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import "../Navbar.css";
import MainContent from "../MainContent";

export default function StudentHome() {
  // let StudentLoggedin = sessionStorage.getItem("isLoggedIn");
  // if (StudentLoggedin === "true") {
  return (
    <div className="w-[100%]  bg-[#111827]">
      <div className="navbar">
        <div className="wrapper">
          <div></div>
          <ul className="list-deco">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-700" : "text-black"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-700" : "text-black"}`
                }
                to={"/student/mygroup"}
              >
                MyGroup
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="text-4xl p-8">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-700" : "text-black"}`
            }
            to={"/student/profile"}
          >
            <VscAccount />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
