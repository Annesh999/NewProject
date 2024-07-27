import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminSignup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    try {
      setLoading(true);
      e.preventDefault();
      let response = await axios.post(
        "http://localhost:5000/adminsignup",
        adminData
      );
      setMessage(response.data.message);

      console.log(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <AdminNavbar />
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {loading && <h3 style={{ color: "blue" }}>Proecssing..</h3>}
                {error && <h3 className="text-red-700">{error.message}</h3>}
                {message && (
                  <h3 className="text-green-500 text-[1.2rem]">{message}</h3>
                )}
                <div>
                  <label
                    for="name"
                    class="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Annesh Nayak"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block  text-sm font-medium text-gray-900 dark:text-white"
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
                    class="block  text-sm font-medium text-gray-900 dark:text-white"
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
                <div>
                  <label
                    for="confirm-password"
                    class="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div class="flex items-star"></div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>

                <p class="text-sm font-light text-gray-200 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/adminLogin"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminSignup;
