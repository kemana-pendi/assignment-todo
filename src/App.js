import React, { Component } from "react";
import NavBar from "./components/navbar";
import Todo from "./components/todo";
import "./App.css";

class App extends Component {
  state = {
    listInput: "",
    toDo: [],
  };

  componentDidMount() {
    const listInput = localStorage.getItem("listInput");
    this.setState({ listInput });
    if (localStorage.getItem("toDo")) {
      const toDo = JSON.parse(localStorage.getItem("toDo"));
      this.setState({ toDo });
    }
  }

  handleChange = (event) => {
    this.setState({ listInput: event.target.value });
  };

  handleSubmit = () => {
    const { listInput } = this.state;
    localStorage.setItem("listInput", listInput);

    const toDo = [...this.state.toDo];
    const index = toDo.length === 0 ? 1 : toDo[toDo.length - 1].id + 1;
    toDo[toDo.length] = { ...{ id: index, value: listInput } };
    this.setState({ toDo });
    localStorage.setItem("toDo", JSON.stringify(toDo));
  };

  handleDelete = (toDoId) => {
    console.log("delete click on id ", toDoId);
    const toDo = this.state.toDo.filter((c) => c.id !== toDoId);
    this.setState({ toDo });
  };

  handleEdit = (toDoId) => {};

  render() {
    return (
      <React.Fragment>
        <NavBar
          listInput={this.state.listInput}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <main className="container">
          <Todo
            toDo={this.state.toDo}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
