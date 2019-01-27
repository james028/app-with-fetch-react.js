import React, { Component } from "react";
import "../styles.css";

class TodoItem extends Component {
  render() {
    return (
      <div style={styles}>
        <div className={`${this.props.comp.completed ? "line" : " "}`}>
          <input
            type="checkbox"
            onChange={() => this.props.toggleLine(this.props.comp.id)}
          />
          {this.props.comp.name}{" "}
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

const styles = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#eee",
  fontSize: "24px",
  marginBottom: "10px",
  padding: "10px"
};

export default TodoItem;
