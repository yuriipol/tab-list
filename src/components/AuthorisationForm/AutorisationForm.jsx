import { Component } from "react";
import s from "./Autorisation.module.css";
import { nanoid } from "nanoid";
import { AiFillAndroid } from "react-icons/ai";

const initialStated = {
  name: "",
  email: "",
  password: "",
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
      <form onSubmit={handleOnsubmit} className={s.form}>
        {options.map((item) => (
          <div className={s.formGroup} key={item[0]}>
            <label key={item[0]}>
              {item[0]}
              <input
                type={item[0]}
                name={item[0]}
                onChange={handleChange}
                value={item[1]}
                className={s.input}
              />
            </label>
          </div>
        ))}
        {/* <label htmlFor="email"></label>
        <input id={email} type="email" />
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="password" />
        </label> */}
        <button type="submit" className={s.button}>
          <AiFillAndroid style={{ fontSize: 18 }} />
          <span className={s.addButtonText}>ADD</span>
          <AiFillAndroid style={{ fontSize: 18 }} />
        </button>
      </form>
    );
  }
}

export default AutorisationForm;
