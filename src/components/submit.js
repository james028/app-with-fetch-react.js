import React, { Component } from "react";

class Form extends Component {
  state = {
    val: ""
  };

  submit = e => {
    e.preventDefault();

    this.props.add(this.state.val);
    this.setState({
      val: ""
    });
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <div style={form}>
            <input
              style={input}
              type="input"
              placeholder="add..."
              name="val"
              value={this.state.val}
              onChange={this.change}
            />
            <button style={btn}>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const form = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "20px 0"
};

const input = {
  height: "34px",
  border: "1.5px solid black"
};

const btn = {
  height: "40px",
  width: "80px",
  backgroundColor: "purple",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

export default Form;
