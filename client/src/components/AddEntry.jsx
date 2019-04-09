import React, { Component } from "react";
import "./AddEntry.css";

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
    this.add = this.add.bind(this);
    this.updateState = this.updateState.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
  }

  add() {
    this.props.addTodo(this.state.entry);
    this.setState({ entry: "" });
  }

  updateState(event) {
    this.setState({ entry: event.target.value });
  }

  checkEnter(event) {
    if (event.key === "Enter") {
      this.add();
    }
  }

  render() {
    return (
      <div className="AddEntry">
        <input
          type="text"
          className="entry-textbox"
          onChange={this.updateState}
          onKeyPress={this.checkEnter}
          value={this.state.entry}
          placeholder="Write a task here"
        />
        <button type="submit" className="add-btn" onClick={this.add}>
          Add
        </button>
      </div>
    );
  }
}

export default AddEntry;
