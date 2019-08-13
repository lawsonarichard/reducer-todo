import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectTask } from "../actions/index";

class TodoList extends Component {
  createListItems() {
    return this.props.users.map(user => {
      return (
        <div
          className="item"
          key={user.id}
          onClick={() => this.props.selectTask(user)}
        >
          {user.task}
        </div>
      );
    });
  }

  render() {
    return <div className="itembox">{this.createListItems()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectTask: selectTask }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TodoList);
