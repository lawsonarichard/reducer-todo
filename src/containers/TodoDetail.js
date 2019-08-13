import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "shards-react";
class TodoDetail extends Component {
  render() {
    if (!this.props.user) {
      return <h2>Select a Task</h2>;
    }
    return (
      <div className="description-box">
        <p>Description: {this.props.user.description}</p>
        <Button>Complete Task</Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.activeTask
  };
}

export default connect(mapStateToProps)(TodoDetail);
