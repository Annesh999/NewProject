import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminHome from "./AdminHome";

export default function AdminManageStudent() {
  const [isActive, setIsActive] = useState(true);
  const editHandle = (id, firstname, lastname, email, phone, address) => {
    setformData({
      ...fromData,
      id: id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      address: address,
    });
    setIsActive(!isActive);
  };

  const [fromData, setformData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });
  function handleChange(e) {
    setformData({ ...fromData, [e.target.name]: e.target.value });
  }

  async function onEditSubmit(e) {
    editHandle();
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:5000/onedit", fromData);

      if (
        response.data.message === "You have been successfully update the data"
      ) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getusers");

      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async function handleDelete(email) {
    try {
      const confirmed = window.confirm(
        "Do you want to delete? Please click OK to proceed."
      );
      if (confirmed) {
        const response = await axios.delete(
          `http://localhost:5000/removeUsers/${email}`
        );
        if (response.status === 200) {
          fetchData();
        } else {
          console.error(
            "Error deleting data. Server returned status:",
            response.status
          );
          // Display an appropriate error message to the user
          alert("Error deleting student record. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      // Display an appropriate error message to the user
      alert(
        "An unexpected error occurred while deleting the student record. Please try again later."
      );
    }
  }

  return (
    <div>
      <AdminHome />

      <div
        className={`w-[300px] h-[350px] bg-slate-700 absolute  mt-[60px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2	  ${
          isActive ? "hidden" : "block z-30"
        } `}
        id="container"
      >
        <form method="post" className="mx-12 p-2" onSubmit={onEditSubmit}>
          <div>
            <label
              for="name"
              class="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="name"
              className="p-1"
              placeholder=""
              required=""
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              for="name"
              class="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="name"
              className="p-1"
              placeholder=""
              required=""
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              for="name"
              class="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-1"
              placeholder=""
              required=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              for="Phone"
              class="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              type="Phone"
              name="phone"
              id="Phone"
              className="p-1"
              placeholder=""
              required=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              for="Phone"
              class="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              address
            </label>
            <input
              type="address"
              name="address"
              id="address"
              className="p-1"
              placeholder=""
              required=""
              onChange={handleChange}
            />
          </div>
          <button className="p-3 bg-green-500 mt-5 mx-[50px] " type="submit">
            Submit
          </button>
        </form>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
                Last Name{" "}
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>

              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((rec) => (
              <tr
                key={rec.id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 py-4 font-medium"
              >
                <td class="px-6 py-4"> {rec.firstname}</td>
                <td class="px-6 py-4">{rec.lastname}</td>
                <td class="px-6 py-4">{rec.email}</td>
                <td class="px-6 py-4">{rec.phone}</td>
                <td class="px-6 py-4">{rec.address}</td>
                <td class="px-6 py-4">
                  <button
                    className="bg-green-700 text-slate-100 p-2 mx-[3px] "
                    onClick={() => {
                      editHandle(
                        rec.id,
                        rec.firstname,
                        rec.lastname,
                        rec.email,
                        rec.phone,
                        rec.address
                      );
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-700 text-slate-100 p-2"
                    onClick={() => {
                      handleDelete(rec.email);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
