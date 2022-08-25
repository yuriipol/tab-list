import { Component } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
// import s from "./App.module.css";
// import AutorisationForm from "./components/AuthorisationForm";
// import UserList from "./components/UsersList/UserList";

// class App extends Component {
//   state = {
//     users: [],
//   };
//   addUser = ({ user }) => {
//     this.setState((prevState) => {
//       return {
//         users: [...prevState.users, user],
//       };
//     });
//   };
//   render() {
//     const { users } = this.state;
//     return (
//       <div className={s.container}>
//         <h2 className={s.title}>User data</h2>
//         <div className={s.row}>
//           <AutorisationForm addUser={this.addUser} />
//           <UserList users={users} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
// class App extends Component {
//   state = {
//     products: [],
//   };

//   onSubmit = (product) => {
//     this.setState((prevState) => {
//       return {
//         products: [...prevState.products, product],
//       };
//     });
//   };
//   render() {
//     return <ProductForm onSubmit={this.onSubmit} />;
//   }
// }

// export default App;
import Player from "./components/Player/Player.jsx";
export default function App() {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
}
