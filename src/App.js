import { Component } from "react";
import s from "./App.module.css";
import AutorisationForm from "./components/AuthorisationForm";
import UserList from "./components/UsersList/UserList";

class App extends Component {
  state = {
    users: [],
  };
  addUser = ({ user }) => {
    this.setState((prevState) => {
      return {
        users: [...prevState.users, user],
      };
    });
  };
  render() {
    const { users } = this.state;
    return (
      <div className={s.container}>
        <h2 className={s.title}>User data</h2>
        <div className={s.row}>
          <AutorisationForm addUser={this.addUser} />
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
