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
              type="input"
              placeholder="add..."
              name="val"
              value={this.state.val}
              onChange={this.change}
            />
            <button>Add</button>
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

export default Form;
