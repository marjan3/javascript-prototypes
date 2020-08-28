import React, { Component } from "react";

export default class RoundCell extends Component {
  constructor(data) {
    super();
    this.state = {
      round: data.data
    };
  }

  render() {
    return (
      <td>
        <p>
          <strong>Id: </strong> {this.state.round.id}
        </p>
        <p>
          <strong>Date: </strong>
          {this.state.round.date}
        </p>
      </td>
    );
  }
}
