import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar";
// import Navbar from "../components/navbar";

export default function StudentLogin() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/studentlogin",
        loginInfo
      );
      console.log(response);
      if (response.data.message === "successfull") {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem(
          "firstname",
          response.data.response[0].firstname
        );
        sessionStorage.setItem("lastname", response.data.response[0].lastname);
        sessionStorage.setItem("email", response.data.response[0].email);
        sessionStorage.setItem("phone", response.data.response[0].phone);
        navigate("/student");
      } else {
        setLoginInfo({ ...loginInfo, password: "" });
        setMessage(response.data.message);
        console.log(response.data.message, "else");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-[#111827] w-[100%] h-[100vh]">
      <Navbar />

      <div className=" lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm   ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-200  ">
            Student Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="post" onSubmit={handelSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-slate-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          {loading && <h3 style={{ color: "blue" }}>Proecssing..</h3>}
          {error && <h3 className="text-red-700">{error.message}</h3>}
          {message && (
            <h3 className="text-green-500 text-[1.2rem]">{message}</h3>
          )}
          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/studentsignup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
