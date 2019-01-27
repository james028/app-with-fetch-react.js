import React, { Component } from "react";
import Todo from "./components/todo";
import Header from "./layout/header";
import Form from "./components/submit";
import uuid from "uuid";

class App extends Component {
  state = {
    companies: [
      { id: 1, name: "Company One", category: "Finance", completed: false },
      { id: 2, name: "Company Two", category: "Retail", completed: false },
      { id: 3, name: "Company Three", category: "Auto", completed: false }
    ]
  };

  add = e => {
    const newObj = {
      id: uuid(),
      name: e,
      completed: false
    };

    this.setState({
      companies: [...this.state.companies, newObj]
    });
  };

  toggleLine = id => {
    let newLine = this.state.companies.map(e => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
      return e;
    });

    this.setState({
      companies: newLine
    });
  };

  removeItem = id => {
    let newRemove = this.state.companies.filter(e => {
      return e.id !== id;
    });

    this.setState({
      companies: newRemove
    });
  };

  render() {
    return (
      <div>
        <div className="content">
          <Header />
          <Form add={this.add} />
          <Todo
            companies={this.state.companies}
            toggleLine={this.toggleLine}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
