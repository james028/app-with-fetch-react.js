import React, { Component } from "react";
import Todo from "./components/todo";

class App extends Component {
  state = {
    companies: [
      { name: "Company One", category: "Finance", completed: true },
      { name: "Company Two", category: "Retail", completed: false },
      { name: "Company Three", category: "Auto", completed: true }
    ]
  };

  render() {
    return (
      <div>
        <Todo companies={this.state.companies} />
      </div>
    );
  }
}

export default App;
