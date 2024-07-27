import React from "react";
import Content from "./Card";
import "./MainContent.css";
import Achivments from "./Achivments";
import Offers from "./Offers";
import Footer from "./Footer";
import Navbar from "./navbar";
import About from "./About";

const box = () => {
  return (
    <div
      style={{
        width: "5000px",
        height: "100px",
        backgroundColor: "lightblue",
        margin: "20px",
      }}
    >
      Box Content
    </div>
  );
};
export default function MainContent() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        {/* <div className="w-[40%] h-[38rem] bg-slate-500 ">
          <p className="text-white text-4xl font-bold   	">
            "Effortlessly Manage Your Projects: Streamline, Collaborate,
            Succeed!"
          </p>
        </div> */}
        <div className="background  w-[100%] h-[38rem] 	bg-no-repeat bg-right-top bg-[length:50rem_43.2rem]">
          {/* <img src={"./images/file.png"} alt="" /> */}
          <div className="text-white   py-[13rem] px-8 font-poppins font-semibold tracking-wides  ">
            <h1 className="text-white text-6xl font-bold mb-3 font-poppins deco ">
              HI! Welcome To
            </h1>
            <p className="text-xl">
              Effortlessly Organize, Collaborate, <br />
              and Succeed Your Complete Project <br /> Management Solution.
            </p>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <box />
        </div>
      </div>
      <About />
      <Achivments />
      <Offers />
      <Footer />
    </>
  );
}
