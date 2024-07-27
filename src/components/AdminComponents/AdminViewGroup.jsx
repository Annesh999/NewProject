import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminHome from "./AdminHome";

export default function AdminViewGroup() {
  const [isActive, setIsActive] = useState(true);
  const editHandle = (id, groupname, projectname, projectguide) => {
    setformData({
      id: id,
      groupname: groupname,
      projectname: projectname,
      projectguide: projectguide,
    });
    setIsActive(!isActive);
  };
  async function onEditSubmit(e) {
    editHandle();
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:5000/viewgrouponedit",
        fromData
      );

      if (
        response.data.message === "You have been successfully update the data"
      ) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleChange(e) {
    // console.log(fromData);
    setformData({ ...fromData, [e.target.name]: e.target.value });
  }

  const [fromData, setformData] = useState({
    id: "",
    groupname: "",
    projectname: "",
    projectguide: "",
  });

  ///////////////////////////show data//////////////////////////////////
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/viewgroups");

      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  ////////////////////////////////////////////////////////////////////
  async function handleDelete(id) {
    try {
      const confirmed = window.confirm(
        "Do you want to delete? Please click OK to proceed."
      );
      if (confirmed) {
        const response = await axios.delete(
          `http://localhost:5000/removegroup/${id}`
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
        className={`w-[300px] h-[250px] bg-slate-700 absolute  mt-[60px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2	  ${
          isActive ? "hidden" : "block z-30"
        } `}
        id="container"
      >
        <form method="post" className="mx-12 p-3" onSubmit={onEditSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Group Name
            </label>
            <input
              type="text"
              name="groupname"
              id="groupname"
              className="p-1"
              placeholder=""
              required=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="projectname"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Name
            </label>
            <input
              type="Phone"
              name="projectname"
              id="projectname"
              className="p-1"
              placeholder=""
              required=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="Phone"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Guide
            </label>
            <input
              type="text"
              name="projectguide"
              id="projectguide"
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

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Group Name
              </th>

              <th scope="col" className="px-6 py-3">
                Project Name
              </th>
              <th scope="col" className="px-6 py-3">
                Project Guide
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((rec) => (
              <tr
                key={rec.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 py-4 font-medium"
              >
                <td className="px-6 py-4"> {rec.groupname}</td>
                <td className="px-6 py-4">{rec.projectname}</td>
                <td className="px-6 py-4">{rec.projectguide}</td>
                <td className="px-6 py-4">
                  <button
                    className="bg-green-700 text-slate-100 p-2 mx-[3px] "
                    onClick={() => {
                      editHandle(
                        rec.id,
                        rec.groupname,
                        rec.projectname,
                        rec.projectguide
                      );
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-700 text-slate-100 p-2"
                    onClick={() => {
                      handleDelete(rec.id);
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
