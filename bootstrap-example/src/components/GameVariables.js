import React, { Component } from "react";

export default class GameVariables extends Component {
  constructor(data) {
    super();
    this.state = {
      gameVars: JSON.stringify(data, undefined, 2)
    };
  }
  render() {
    return <pre>{this.state.gameVars}</pre>;
  }
}
