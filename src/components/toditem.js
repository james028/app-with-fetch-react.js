import React, { Component } from "react";
import "../styles.css";

class TodoItem extends Component {
  render() {
    return (
      <div
        style={styles}
        className={`${this.props.comp.completed ? "line" : " "}`}
      >
        <div>{this.props.comp.name} </div>
        <div> and: {this.props.comp.category}</div>
      </div>
    );
  }
}

const styles = {
  display: "flex",
  backgroundColor: "#eee",
  fontSize: "24px",
  marginBottom: "10px"
};

export default TodoItem;
