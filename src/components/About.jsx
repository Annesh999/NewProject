import React from "react";
import { Element } from "react-scroll";
import imag from "./images/K4C.png";
export default function About() {
  return (
    <div>
      <Element name="about" className="element">
        <section id="about" className="bg-black  ">
          <div className=" flex justify-center items-center  h-[40rem] ">
            <div className="">
              <img src={imag} alt="Profile picture" className="about-pic" />
            </div>
            <div className="ml-4">
              <h1 className="text-white text-3xl font-extrabold">About Us </h1>

              <div className="text-container mt-4">
                <p className="text-white  text-l  ">
                  Welcome to our Project Management System! We're the antidote
                  to project pandemonium, where deadlines dance and chaos
                  reigns. Our team of caffeine-powered creators united to
                  simplify your project woes. Say goodbye to scattered notes and
                  endless emails; we're here to streamline collaboration,
                  effortless delegation, and maybe even leave you with a moment
                  to enjoy college life. Dive into our world of organized chaos
                  and discover a future where projects run like well-oiled
                  machines. With us, you'll wonder how you ever survived without
                  our magic touch. Welcome to efficiency, welcome to simplicity
                  – welcome to our Project Management System.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}
