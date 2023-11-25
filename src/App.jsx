import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([
    {
      id: Math.random() * Math.random(),
      name: "Daniel",
      age: "23",
    },
  ]);

  const addUserHandler = (uName, uAge) => {
    const newList = {
      id: Math.random() * Math.random(),
      name: uName.toLowerCase(),
      age: uAge,
    };
    setUsers((prevList) => {
      return [...prevList, newList];
    });
  };

  return (
    <div className="">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
