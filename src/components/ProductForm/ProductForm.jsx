import { Component } from "react";

const INITIAL_STATE = {
  name: "",
  quantity: "",
  price: 0,
  urgent: false,
  type: "",
};

const goodtypes = ["бытовая химия", "продукты", "одежда"];

class ProductForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  onSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const options = Object.entries(this.state);

    // console.log('options', options);
    return (
      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={this.onSubmit}
      >
        {options.map((option) => {
          if (option[0] === "urgent") {
            return (
              <label key={option[0]}>
                Urgent purchase
                <input
                  name={option[0]}
                  type="checkbox"
                  value={option[1]}
                  checked={option[1]}
                  onChange={this.handleChange}
                  style={{
                    marginLeft: "10px",
                  }}
                />
              </label>
            );
          }
          if (option[0] === "type") {
            return (
              <label key={option[0]}>
                Choose product group
                <select
                  name={option[0]}
                  // value={option[1]}
                  onChange={this.handleChange}
                  defaultValue={goodtypes[0]}
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  {goodtypes.map((goodtype, ind) => (
                    <option
                      // selected={option[1] === goodtype ? true : ind === 0}

                      key={ind}
                      value={goodtype}
                    >
                      {goodtype}
                    </option>
                  ))}
                </select>
              </label>
            );
          }

          return (
            <label key={option[0]}>
              {option[0]}
              <input
                onChange={this.handleChange}
                value={option[1]}
                type={option[0] === "price" ? "number" : "text"}
                name={option[0]}
              />
            </label>
          );
        })}
        <button type="submit">Add product</button>
      </form>
    );
  }
}

export default ProductForm;
