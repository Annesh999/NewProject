import React, { useRef, useState } from "react";
import AdminHome from "./AdminHome";
import axios from "axios";

export default function AdminCreategroup() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [data, setdata] = useState({
    groupname: "",
    projectname: "",
  });
  function handleChange(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let response = await axios.post(
        "http://localhost:5000/creategroup",
        data
      );
      if (response.data.message === "Group Createing Successfully") {
        setMessage(response.data.message);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <div>
      <AdminHome />
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex  p-4 justify-center mx-auto md:h-screen  ">
          <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 h-[32.5rem] ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Group
              </h1>
              <form
                method="post"
                className=" md:space-y-7"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="groupname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    GroupName
                  </label>
                  <input
                    type="text"
                    name="groupname"
                    id="groupname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ProjectName
                  </label>
                  <input
                    type="text"
                    name="projectname"
                    id="projectname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Projectguide"
                    className=" dark:text-white sm:text-sm block font-medium"
                  >
                    ProjectGuide:
                  </label>
                </div>
                <select
                  name="projectguide"
                  id="guides"
                  className="p-3 w-[380px] rounded-lg mt-0"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Padmanava sir">Padmanava sir</option>
                  <option value="Ajay ku ojha">Ajay ku ojha</option>
                  <option value="Ritesh Ray">Ritesh Ray</option>
                  <option value="Monalisa Bindhani">Monalisa Bindhani</option>
                </select>

                <button
                  type="submit"
                  className="w-full  text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                >
                  Create Group
                </button>
                {error && <h3 className="text-red-700">{error.message}</h3>}
                {message && (
                  <h3 className="text-green-500 text-[1.2rem]">{message}</h3>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
