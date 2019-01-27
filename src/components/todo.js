import React, { Component } from "react";
import TodoItem from "./toditem";

class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.companies.map(e => {
          return (
            <TodoItem
              key={e.id}
              comp={e}
              toggleLine={this.props.toggleLine}
              removeItem={this.props.removeItem}
            />
          );
        })}
      </div>
    );
  }
}

export default Todo;
