import React, { useEffect, useState } from "react";
import AdminHome from "./AdminHome";
import axios from "axios";

export default function () {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  // console.log(data);
  // console.log(data2);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/registerstudents");
      // console.log(result);

      setData(result.data.response1);
      setData2(result.data.response2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [value, setvalue] = useState({
    groupname: "",
    email: "",
  });
  function handleChange(e) {
    console.log(value);
    setvalue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/assignproject",
        value
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <AdminHome />
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex  p-4 justify-center mx-auto md:h-screen  ">
          <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 h-[21rem] ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                Assign Student
              </h1>
              <form className=" md:space-y-7   " onSubmit={handelSubmit}>
                <label
                  htmlFor="assingstudent"
                  className=" dark:text-white sm:text-sm font-bold"
                >
                  Group Name:
                </label>

                <select
                  name="groupname"
                  id="groupname"
                  className=" mx-2 p-2 w-[250px] "
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {data2.map((d, idx) => (
                    <option key={idx} value={d.groupname}>
                      {d.groupname}
                    </option>
                  ))}
                </select>

                <label
                  htmlFor="assingstudent"
                  className=" dark:text-white sm:text-sm font-bold"
                >
                  Student Email:
                </label>

                <select
                  name="email"
                  id="email"
                  className=" mx-2 p-2 w-[250px] "
                  onChange={handleChange}
                >
                  <option value="">select</option>
                  {data.map((d, idx) => (
                    <option key={idx} value={d.email}>
                      {d.email}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full  text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                >
                  Assing
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
