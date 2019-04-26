import React, { Component } from "react";
import "./TodoAppList.css";
import Todo from "./Todo.jsx";
import AddEntry from "./AddEntry.jsx";

class TodoAppList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { entry: "Use mongo", status: 0 },
        { entry: "Make it fancy", status: 0 },
        { entry: "Deploy to Heroku", status: 1 }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.check = this.check.bind(this);
    this.uncheck = this.uncheck.bind(this);
  }

  addTodo(newEntry) {
    if (newEntry !== "") {
      let newTodo = this.state.todo;
      newTodo.unshift({ entry: newEntry, status: 0 });
      this.setState({
        todo: newTodo
      });
    } else {
      this.placeholder = "Please enter a task";
    }
  }

  removeTodo(entry) {
    const filteredEntries = this.state.todo.filter(object => {
      return object.entry !== entry;
    });

    this.setState({ todo: filteredEntries });
  }

  check(entry) {
    //Delete
    let filteredEntries = this.state.todo.filter(object => {
      return object.entry !== entry;
    });
    //Add again with new status
    filteredEntries.push({ entry: entry, status: 1 });

    this.setState({ todo: filteredEntries });
  }

  uncheck(entry) {
    //Delete
    let filteredEntries = this.state.todo.filter(object => {
      return object.entry !== entry;
    });
    //Add again with new status
    filteredEntries.unshift({ entry: entry, status: 0 });

    this.setState({ todo: filteredEntries });
  }

  render() {
    return (
      <div className="TodoAppList">
        <AddEntry addTodo={this.addTodo} placeholder={this.placeholder} />
        <div className="Todo-title">
          <h2>To-do list:</h2>
        </div>
        {this.state.todo.map((object, index) => (
          <Todo
            key={index}
            entry={object.entry}
            status={object.status}
            removeTodo={this.removeTodo}
            check={this.check}
            uncheck={this.uncheck}
          />
        ))}
      </div>
    );
  }
}

export default TodoAppList;
