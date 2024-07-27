import React, { useEffect, useState } from "react";
import StudentHome from "./StudentHome";
import "../ProfileContent.css";
import { Link } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import axios from "axios";

export default function StudentViewGroup() {
  useEffect(() => {
    fetchData();
  }, []);

  const [groupData, setgroupData] = useState({
    groupname: "Not assign",
    groupmembers: [1, 2, 3],
    projectguide: "Not assign",
    projectname: "Not assign",
  });
  console.log(groupData);
  const fetchData = async () => {
    console.log(sessionStorage.getItem("email"));
    try {
      let result = await axios.get(
        `http://localhost:5000/viewgroup/${sessionStorage.getItem("email")}`
      );

      setgroupData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <StudentHome />
      <div className="profile-wrapper h-[250px] ">
        <div className="profile-text-deco">
          <div className="left-deco">
            <div className="text-4xl">
              <FaPeopleGroup />
            </div>
            My Group
          </div>
        </div>
        <div className=" flex ">
          <table class="table-auto text-white flex ">
            <thead
              className="
            "
            >
              <tr className=" flex flex-col text-xl ml-[20px]">
                <th className="p-1">GroupName:</th>
                <th className="p-1">ProjectName:</th>
                <th className="p-1">ProjectGuide:</th>
                <th className="p-1 ">GroupMembers:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-xl p-1">{groupData.groupname}</td>
              </tr>
              <tr>
                <td className="text-xl p-1">{groupData.projectname}</td>
              </tr>
              <tr>
                <td className="text-xl p-1">{groupData.projectguide}</td>
              </tr>
              <tr>
                <td className="text-xl p-1 ">
                  {groupData.groupmembers.map(
                    (e) => e.firstname + " " + e.lastname + " , "
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
