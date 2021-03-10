import React, { Component } from "react";
import NavBar from "./components/navbar";
import Todo from "./components/todo";
import "./App.css";

class App extends Component {
  state = {
    listInput: "",
    error: "",
    toDo: [],
  };

  componentDidMount() {
    this.setState({ listInput: localStorage.getItem("listInput") });
    if (localStorage.getItem("toDo")) {
      this.setState({ toDo: JSON.parse(localStorage.getItem("toDo")) });
    }
    if (localStorage.getItem("error")) {
      this.setState({ error: localStorage.getItem("error") });
    }
  }

  handleChange = (event) => {
    this.setState({ listInput: event.target.value });
  };

  handleEditChange = (value, id) => {
    const toDo = [...this.state.toDo];
    let index = toDo.findIndex((item) => item.id === id);
    toDo[index].value = value;
    this.setState({ toDo });
  };

  handleSubmit = () => {
    const { listInput } = this.state;
    if (listInput !== "") {
      const toDo = [...this.state.toDo];
      this.setState({ error: "", listInput: "" });
      localStorage.setItem("error", "");
      localStorage.setItem("listInput", "");

      if (toDo.length < 10) {
        const index = toDo.length === 0 ? 1 : toDo[toDo.length - 1].id + 1;
        toDo[toDo.length] = { ...{ id: index, value: listInput, editing: "" } };
        this.setState({ toDo });
        localStorage.setItem("toDo", JSON.stringify(toDo));
      } else {
        this.setState({ error: "Limit list is 10, you cannot add more" });
        localStorage.setItem("error", "Limit list is 10, you cannot add more");
      }
    } else {
      this.setState({ error: "List cannot be empty" });
      localStorage.setItem("error", "List cannot be empty");
    }
  };

  handleDelete = (toDoId) => {
    const toDo = this.state.toDo.filter((c) => c.id !== toDoId);
    this.setState({ toDo });
    localStorage.setItem("toDo", JSON.stringify(toDo));
    if (toDo.length < 10) {
      this.setState({ error: "" });
      localStorage.setItem("error", "");
    }
  };

  handleEdit = (toDoId) => {
    const toDo = [...this.state.toDo];
    let index = toDo.findIndex((item) => item.id === toDoId);
    if (toDo[index].editing === "active") {
      toDo[index].editing = "";
    } else {
      toDo[index].editing = "active";
    }
    this.setState({ toDo });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          listInput={this.state.listInput}
          error={this.state.error}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <main className="container">
          <Todo
            toDo={this.state.toDo}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            onChange={this.handleEditChange}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
