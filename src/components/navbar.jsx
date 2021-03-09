import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { listInput, onSubmit, onChange } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={onSubmit}>
                <label>
                  To Do List{" "}
                  <input
                    type="text"
                    name="listInput"
                    value={listInput}
                    onChange={onChange}
                    className="form-control"
                  />
                </label>
                <button type="submit" className="btn btn-primary btn-md m-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
