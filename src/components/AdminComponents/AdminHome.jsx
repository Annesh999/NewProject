import React from "react";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function AdminHome() {
  return (
    <div>
      <div className="admin-nav">
        <div>{/* <p>Logo</p> */}</div>
        <div className="flex gap-8 items-center	">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-white"}`
            }
            to={"/admin/managestudent"}
          >
            ManageStudent{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-white"}`
            }
            to={"/admin/assignstudent"}
          >
            AssingStudent
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-white"}`
            }
            to={"/admin/creategroup"}
          >
            CreateGroup
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-white"}`
            }
            to={"/admin/viewgroup"}
          >
            ViewGroup
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-white"}`
            }
            to={"/admin/Profile"}
          >
            <div className="text-2xl">
              <VscAccount />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
