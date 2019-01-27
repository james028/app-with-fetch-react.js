import React, { Component } from "react";
import TodoItem from "./toditem";

class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.companies.map(e => {
          return <TodoItem comp={e} />;
        })}
      </div>
    );
  }
}

export default Todo;
