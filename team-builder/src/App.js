import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const baseData = [
  {
    name: "Reuben",
    email: "reuben@email.com",
    role: "Student",
  },
  {
    name: "Jeff",
    email: "jeff@email.com",
    role: "Teacher",
  },
];

const emptyInput = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [member, setMember] = useState(baseData);
  const [inputVal, setInputVal] = useState(emptyInput);

  const change = (evt) => {
    const { name, value } = evt.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    setMember([...member, inputVal]);
    setInputVal(emptyInput);
  };

  return (
    <div className="App">
      <div className="input">
        <form onSubmit={submit}>
          <div className="label">
            <input
              type="text"
              name="name"
              value={inputVal.name}
              onChange={change}
              placeholder="Name Here"
            />
          </div>
          <div className="label">
            <input
              type="email"
              name="email"
              value={inputVal.email}
              onChange={change}
              placeholder="Email Here"
            />{" "}
          </div>
          <div className="label">
            <select value={inputVal.role} name="role" onChange={change}>
              <option value="">--Pick Role--</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="teamlead">Team Lead</option>
            </select>
          </div>
          <div className="label">
            <button
              disabled={!inputVal.email || !inputVal.name || !inputVal.role}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="main">
          {member.map((item, idx) => {
            return (
              <>
                <div className="box" key={idx}>
                  <h3>Name: {item.name}</h3>
                  <p>Email: {item.email}</p>
                  <p>Role: {item.role}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
