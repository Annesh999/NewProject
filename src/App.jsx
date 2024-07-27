import React from "react";
// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import AdminLogin from "./components/AdminComponents/AdminLogin";
import AdminSignup from "./components/AdminComponents/AdminSignup";
import AdminNavbar from "./components/AdminComponents/AdminNavbar";
import Changepassword from "./components/Changepassword";
import AdminManageStudent from "./components/AdminComponents/AdminManageStudent";
import PrivateAdminPanel from "./components/AdminComponents/PrivateAdminPanel";
import AdminHome from "./components/AdminComponents/AdminHome";
// import ProfileContent from "./components/ProfileContent";
import PrivateUsers from "./components/PrivateUsers";
import AdminProfile from "./components/AdminComponents/AdminProfile";

import StudentHome from "./components/StudentComponents/StudentHome";
// import GuideHome from "./components/GuideComponets/GuideHome";
// import GuideLogin from "./components/GuideComponets/GuideLogin";
// import GuideSignup from "./components/GuideComponets/GuideSignup";
import StudentLogin from "./components/StudentComponents/StudentLogin";
import StudentSignup from "./components/StudentComponents/StudentSignup";
import StudentNested from "./components/StudentComponents/StudentNested";
import StudentProfile from "./components/StudentComponents/StudentProfile";
import AdminChangepassword from "./components/AdminComponents/AdminChangepassword";
import ErrorPage from "./components/ErrorPage";
import AdminCreategroup from "./components/AdminComponents/AdminCreategroup";
import AdminAssingStudent from "./components/AdminComponents/AdminAssingStudent";
import AdminViewGroup from "./components/AdminComponents/AdminViewGroup";
import StudentViewGroup from "./components/StudentComponents/StudentViewGroup";
import About from "./components/About";

export default function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/admin" element={<AdminNavbar />} />

        <Route path="/admin" element={<PrivateAdminPanel />}>
          <Route path="adminhome" element={<AdminHome />} />
          <Route path="managestudent" element={<AdminManageStudent />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="Changepassword" element={<AdminChangepassword />} />
          <Route path="creategroup" element={<AdminCreategroup />} />
          <Route path="creategroup" element={<AdminCreategroup />} />
          <Route path="viewgroup" element={<AdminViewGroup />} />
          <Route path="assignstudent" element={<AdminAssingStudent />} />
        </Route>

        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/studentsignup" element={<StudentSignup />} />

        <Route path="/student" element={<StudentNested />}>
          <Route path="" element={<StudentHome />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="profile/changepassword" element={<Changepassword />} />
          <Route path="mygroup" element={<StudentViewGroup />} />
        </Route>

        {/* <Route path="/guide" element={<GuideHome />} /> */}
        {/* <Route path="guide/login" element={<GuideLogin />} /> */}
        {/* <Route path="guide/signup" element={<GuideSignup />} /> */}
        {/* <Route path="/guide" element={<Guidenested />}>
          <Route path="profile" element={<StudentProfile />} />
          <Route path="changepassword" element={<Changepassword />} />
        </Route> */}
      </Routes>
    </div>
  );
}
