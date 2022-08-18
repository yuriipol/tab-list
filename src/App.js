import { Component } from "react";
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
      <>
        <AutorisationForm addUser={this.addUser} />
        <UserList users={users} />
      </>
    );
  }
}

export default App;
