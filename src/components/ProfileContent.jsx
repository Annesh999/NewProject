import React from "react";
import Navbar from "./navbar";
import "./ProfileContent.css";
import { MdLockReset } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileContent() {
  let navigate = useNavigate();
  function logout(e) {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <div className="profile-wrapper">
        <div className="profile-text-deco">
          <div className="left-deco">
            <img src="" alt="" /> My Profile
          </div>
          <Link to={"/home/changepassword"}>
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
            <label htmlFor="FirstName">FirstName</label>

            <input
              type="text"
              name=""
              id="FirstName"
              value={sessionStorage.getItem("firstname")}
            />
          </div>
          <div className="user-info-inside">
            <label htmlFor="LastName">LastName</label>
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
            {" "}
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
