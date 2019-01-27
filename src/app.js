import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./components/todo";
import Header from "./layout/header";
import Form from "./components/submit";
import About from "./layout/about";
import uuid from "uuid";

class App extends Component {
  state = {
    companies: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data =>
        this.setState({
          companies: data
        })
      )
      .catch(err => console.log(err));
  }

  add = e => {
    const newObj = {
      title: e,
      completed: false
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          companies: [...this.state.companies, data]
        });
        console.log(this.state.companies);
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
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          companies: [
            ...this.state.companies.filter(e => {
              return e.id !== id;
            })
          ]
        });
      });
  };

  render() {
    return (
      <div>
        <Router>
          <div className="content">
            <Header />
            <Form add={this.add} />
            <Route
              exact
              path="/"
              render={props => (
                <>
                  {this.state.companies.length < 1 ? (
                    <h1>Nie ma żadnych zadań</h1>
                  ) : (
                    <Todo
                      companies={this.state.companies}
                      toggleLine={this.toggleLine}
                      removeItem={this.removeItem}
                    />
                  )}
                </>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
