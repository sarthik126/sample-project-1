import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import TableView from "./TableView";

export default function AddDetails({ auth }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [project, setProject] = useState("Project 1");
  const [allData, setAllData] = useState([]);

  const navigate = useNavigate();

  async function updateDetails(e) {
    e.preventDefault();
    let [flag, tmpData] = await validateData();
    console.log(flag);
    if (flag) {
      fetch("http://localhost:5500/add-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          email: userEmail,
          phone,
          project,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAllData((prev) => [
            ...prev,
            { username: userName, email: userEmail, phone, project },
          ]);
          alert(data.message);
        })
        .catch((err) => {
          alert("Error");
        });
    } else {
      alert(
        `Number already exists !! \nUsername: ${tmpData.username} \nPhone No: ${tmpData.phone}`
      );
    }
  }

  async function validateData() {
    let tmp = true;
    let data = {};
    allData.forEach((item) => {
      if (item.phone === phone) {
        tmp = false;
        data = item;
      }
    });

    return [tmp, data];
  }

  useEffect(() => {
    if (!auth) {
      navigate("/");
    } else {
      fetch("http://localhost:5500/all-users")
        .then((res) => res.json())
        .then((data) => {
          setAllData([...data]);
          // console.log(data)
        })
        .catch((err) => {
          console.log("Error");
        });
    }
  }, []);

  return (
    <div className="add-details-box">
      <h2>Add Details Page</h2>
      <form onSubmit={updateDetails}>
        <label htmlFor="name">Enter your name</label>
        <input
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          id="name"
          type="text"
        />
        <label htmlFor="email">Enter your email</label>
        <input
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          id="email"
          type="email"
        />
        <label htmlFor="phone">Enter your phone number</label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          type="number"
        />
        <label htmlFor="project">Select Project</label>
        <select
          onChange={(e) => setProject(e.target.value)}
          name="project"
          value={project}
        >
          <option value="Project 1">Project 1</option>
          <option value="Project 2">Project 2</option>
          <option value="Project 3">Project 3</option>
        </select>
        <button type="submit">Add Details</button>
      </form>

      {/* <TableView allData={allData} /> */}
    </div>
  );
}
