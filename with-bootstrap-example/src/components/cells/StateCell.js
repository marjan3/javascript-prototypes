import React, { Component } from "react";

export default class StateCell extends Component {
  constructor(data) {
    super();
    this.state = { state: data.data };
  }

  render() {
    return (
      <td>
        <p>
          <strong>Ingoing state: </strong>
          {this.state.state.ingoingState}
        </p>
        <p>
          <strong>Outgoing state: </strong> {this.state.state.outgoingState}
        </p>
      </td>
    );
  }
}
