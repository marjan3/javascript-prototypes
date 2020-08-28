import React, { Component } from "react";

export default class ActionCell extends Component {
  constructor(data) {
    super();
    this.state = {
      action: data.data
    };
  }

  render() {
    return (
      <td>
        <p>
          <strong>Current action: </strong> {this.state.action.action}
        </p>
        <p>
          <strong>Next action: </strong>
          {this.state.action.nextAction.join(",")}
        </p>
      </td>
    );
  }
}
