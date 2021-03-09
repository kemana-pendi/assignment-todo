import React, { Component } from "react";
import List from "./list";

class Todo extends Component {
  render() {
    const { toDo, onDelete, onEdit } = this.props;
    return (
      <React.Fragment>
        <div className={this.getHideRow()}>
          <div className="col mt-4">
            <span className={this.getAlertClasses()}>
              {this.getEmptyNotice()}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col mt-4">
            {toDo.map((list) => (
              <List
                key={list.id}
                onEdit={onEdit}
                onDelete={onDelete}
                list={list}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  getEmptyNotice() {
    return this.props.toDo.length === 0 ? "Please submit a new list" : "";
  }

  getAlertClasses() {
    return this.props.toDo.length === 0 ? "alert alert-danger" : "";
  }

  getHideRow() {
    let classes = "row d-";
    classes += this.props.toDo.length === 0 ? "block" : "none";
    return classes;
  }
}

export default Todo;
