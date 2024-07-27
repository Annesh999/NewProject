import React from "react";
import "./ListItems.css";
import { Link } from "react-router-dom";
export default function UsersHome() {
  return (
    <div className="wrapper">
      <ul className="list-deco">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to={"/service"}>Service</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Trainee"}>Trainee</Link>
        </li>
        <li>
          <Link to={"/Guide"}>Guide</Link>
        </li>
        <li>
          <Link to={"/Apply"}>Project</Link>
        </li>
        
      </ul>
    </div>
  );
}
