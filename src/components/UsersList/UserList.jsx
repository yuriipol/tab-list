import s from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div>
      <ol>
        {users.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span>{item.password}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
