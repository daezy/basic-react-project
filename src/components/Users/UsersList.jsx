import Card from "../UI/Card";

const UsersList = ({ users }) => {
  return (
    <div className="w-2/3 mx-auto mt-5">
      <Card className={"p-4"}>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="p-3 rounded border-2 my-2 border-blue-950"
            >
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UsersList;
