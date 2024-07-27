import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  function handleChange(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }
  async function handelSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/adminlogin",
        loginInfo
      );
      console.log(response);
      if (response.data.message === "successfull") {
        sessionStorage.setItem("AdminisLoggedIn", "true");
        sessionStorage.setItem("Admname", response.data.response[0].name);
        sessionStorage.setItem("Admemail", response.data.response[0].email);
        navigate("/admin/adminhome");

        // navigate("/student/studenthome");
        setMessage(response.data.message);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <AdminNavbar />
      <section class="bg-gray-50 dark:bg-gray-900 ">
        <div class="flex  p-4 justify-center mx-auto md:h-screen  ">
          <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 h-[30rem] ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
                {loading && <h3 style={{ color: "blue" }}>Proecssing..</h3>}
                {error && <h3 className="text-red-700">{error.message}</h3>}
                {message && (
                  <h3 className="text-green-500 text-[1.2rem]">{message}</h3>
                )}
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Annesh@gmail.com"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div class="flex items-center justify-between">
                  <a
                    href="#"
                    class="text-sm font-medium text-blue-700 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/adminsignup"}
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
