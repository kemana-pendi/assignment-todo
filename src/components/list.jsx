import React, { Component } from "react";

class List extends Component {
  render() {
    const { onEdit, onDelete, list } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatList()}</span>
        <button
          onClick={() => onEdit(list)}
          className="btn btn-secondary btn-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(list.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.list.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatList() {
    return this.props.list.value;
  }
}

export default List;
