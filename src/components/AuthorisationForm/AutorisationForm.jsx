import { Component } from "react";
import s from "./Autorisation.module.css";
import { nanoid } from "nanoid";

const initialStated = {
  password: "",
  name: "",
  email: "",
};

class AutorisationForm extends Component {
  state = {
    ...initialStated,
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleOnsubmit = (event) => {
    event.preventDefault();
    const { addUser } = this.props;
    const user = { ...this.state, id: nanoid() };
    addUser({ user });
    this.resetForm();
  };
  resetForm() {
    this.setState(initialStated);
  }
  render() {
    const options = Object.entries(this.state);

    const { handleChange, handleOnsubmit } = this;

    return (
      <form onSubmit={handleOnsubmit}>
        {options.map((item) => (
          <label key={item[0]}>
            {item[0]}
            <input
              type={item[0]}
              name={item[0]}
              onChange={handleChange}
              value={item[1]}
            />
          </label>
        ))}
        {/* <label htmlFor="email"></label>
        <input id={email} type="email" />
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="password" />
        </label> */}
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AutorisationForm;
