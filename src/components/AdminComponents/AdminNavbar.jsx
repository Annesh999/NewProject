import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

export default function () {
  return (
    <div>
      <div class="admin-nav">
        <div>{/* <p>Logo</p> */}</div>
        <div className="flex gap-3">
          {/* <Link href="#">Change Password </Link>
          <Link to={"/admin/managestudent"}>Manager Student </Link>
          <Link to={"/admin/Profile"}>Profile </Link> */}
          <Link to={"/AdminSignup"}>
            <button className="p-3 bg-orange-700 text-slate-50">Signup</button>
          </Link>

          <Link to={"/AdminLogin"}>
            <button className="p-3 bg-orange-700 text-slate-50">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
