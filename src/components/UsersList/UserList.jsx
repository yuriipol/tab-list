import s from "./UserList.module.css";

const UserList = ({ users }) => {
  const elements = users.map((item) => (
    <li key={item.id} className={s.itemUser}>
      <span className={s.info}>{item.name}</span>
      <span className={s.info}>{item.email}</span>
    </li>
  ));
  return (
    <div className={s.list}>
      <ol className={s.info}>{elements}</ol>
    </div>
  );
};

export default UserList;
