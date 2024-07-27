import React from "react";
import { MdLockReset } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminProfile() {
  let navigate = useNavigate();
  function logout(e) {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <AdminHome />
      <div className="profile-wrapper h-[26rem]">
        <div className="profile-text-deco">
          <div className="left-deco ">
            <img src={""} alt="" />
            Admin Profile
          </div>
          <Link to={"/admin/Changepassword"}>
            <div className="right-deco">
              <div className="reset-icon">
                <MdLockReset />
              </div>
              <p>Change password</p>
            </div>
          </Link>
        </div>
        <div className="user-info block">
          <div className="user-info-inside">
            <label htmlFor="FirstName">Name</label>

            <input
              type="text"
              name=""
              id="Name"
              value={sessionStorage.getItem("Admname")}
            />
          </div>

          <div className="user-info-inside">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name=""
              id="Email"
              value={sessionStorage.getItem("Admemail")}
              disabled
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
