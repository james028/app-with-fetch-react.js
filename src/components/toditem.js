import React, { Component } from "react";
import "../styles.css";

class TodoItem extends Component {
  render() {
    const { completed } = this.props.comp;
    return (
      <div className={`main-back ${completed ? "back" : " "}`}>
        <div className={`${completed ? "line" : " "}`}>
          <input
            type="checkbox"
            onChange={() => this.props.toggleLine(this.props.comp.id)}
          />
          {this.props.comp.title}{" "}
        </div>
        <button
          style={btn}
          onClick={() => this.props.removeItem(this.props.comp.id)}
        >
          X
        </button>
      </div>
    );
  }
}

const btn = {
  borderRadius: "50%",
  border: "none",
  height: "30px",
  width: "30px",
  cursor: "pointer",
  backgroundColor: "#e44"
};

export default TodoItem;
