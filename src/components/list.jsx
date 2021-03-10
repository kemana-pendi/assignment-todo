import React, { Component } from "react";

class List extends Component {
  render() {
    const { onEdit, onDelete, list } = this.props;
    return (
      <div className="form-group form-group-sm row">
        {this.elementRender()}
        <button
          onClick={() => onEdit(list.id)}
          className={this.getEditClasses()}
        >
          {this.buttonRender()}
        </button>
        <button
          onClick={() => onDelete(list.id)}
          className={this.getDeleteClasses()}
        >
          Delete
        </button>
      </div>
    );
  }

  getEditClasses() {
    let classes = "btn mr-2 btn-";
    classes +=
      this.props.list.editing !== "" ? "success btn-md" : "secondary btn-sm";
    return classes;
  }

  getDeleteClasses() {
    let classes = "btn btn-danger btn-sm mr-2 ";
    classes += this.props.list.editing !== "" ? "d-none" : "";
    return classes;
  }

  formatList() {
    return this.props.list.value;
  }

  elementRender() {
    if (this.props.list.editing !== "") {
      return (
        <div class="col-xs-2 mr-2">
          <input
            type="text"
            name="listEdit"
            value={this.props.list.value}
            onChange={(e) =>
              this.props.onChange(e.target.value, this.props.list.id)
            }
            className="form-control input-sm"
          />
        </div>
      );
    } else {
      return (
        <span className="mr-2 justify-content-center align-self-center">
          {this.formatList()}
        </span>
      );
    }
  }
  buttonRender() {
    if (this.props.list.editing !== "") {
      return "Submit";
    } else {
      return "Edit";
    }
  }
}

export default List;
