import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError("Enter valid value for username or age");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    if (+age < 1) {
      setError("Age should be greater than one");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    onAddUser(userName, age);
    setSuccess("Successfully saved data");
    setTimeout(() => {
      setSuccess("");
    }, 2000);
    setUserName("");
    setAge("");
  };
  return (
    <div className="w-2/3 mx-auto mt-9">
      <Card className="px-5 py-4">
        {error && (
          <div className="error bg-red-500 text-gray-200 rounded-md p-3">
            {error}
          </div>
        )}
        {success && (
          <div className="error bg-green-500 text-gray-200 rounded-md p-3">
            {success}
          </div>
        )}

        <form onSubmit={addUserHandler}>
          <div className="p-2">
            <label htmlFor="username" className="mb-2">
              Username
            </label>
            <br />
            <input
              type="text"
              className="w-full border-blue-950 rounded-md border-2 p-2"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="username"
            />
          </div>
          <div className="p-2">
            <label htmlFor="age" className="mb-2">
              Age (years)
            </label>
            <br />
            <input
              type="number"
              className="w-full border-blue-950 rounded-md border-2 p-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              id="age"
            />
          </div>
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
