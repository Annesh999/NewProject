import React from "react";
import "../ProfileContent.css";
import { MdLockReset } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import StudentHome from "./StudentHome";

export default function StudentProfile() {
  let navigate = useNavigate();
  function logout(e) {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div className="bg-[black]">
      <StudentHome />
      <div className="profile-wrapper ">
        <div className="profile-text-deco">
          <div className="left-deco">
            <img src={""} alt="" /> Student Profile
          </div>
          <Link to={"changepassword"}>
            <div className="right-deco">
              <div className="reset-icon">
                <MdLockReset />
              </div>
              <p>Change password</p>
            </div>
          </Link>
        </div>
        <div className="user-info">
          <div className="user-info-inside">
            <label htmlFor="FirstName">First Name</label>

            <input
              type="text"
              name=""
              id="FirstName"
              value={sessionStorage.getItem("firstname")}
            />
          </div>
          <div className="user-info-inside">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              name=""
              id="LastName"
              value={sessionStorage.getItem("lastname")}
            />
          </div>
          <div className="user-info-inside">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name=""
              id="Email"
              value={sessionStorage.getItem("email")}
              disabled
            />
          </div>
          <div className="user-info-inside">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              name=""
              id="Phone"
              value={sessionStorage.getItem("phone")}
            />
          </div>
        </div>
        <div className="btn-style">
          <button className="btn-save">SaveChanges</button>
          <button className="btn-delete" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
