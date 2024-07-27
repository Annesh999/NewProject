import React from "react";
import "./ListItems.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function ListItems() {
  const loggedInStatus = sessionStorage.getItem("isLoggedIn");

  {
    return (
      <div className="wrapper">
        <div></div>
        <ul className="list-deco">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange-600" : "text-black"}`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link
              className={({ isActive }) =>
                `${isActive ? "text-orange-600" : "text-black"}`
              }
              hre
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={({ isActive }) =>
                `${isActive ? "text-orange-600" : "text-black"}`
              }
              hre
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange-600" : "text-black"}`
              }
              to={"/guide/login"}
            >
              Guide
            </NavLink>
          </li>

          <li>
            {
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange-600" : "text-black"}`
                }
                to={
                  sessionStorage.getItem("isLoggedIn")
                    ? "/student"
                    : "/studentlogin"
                }
              >
                Student
              </NavLink>
            }
          </li>
        </ul>
      </div>
    );
  }
}
