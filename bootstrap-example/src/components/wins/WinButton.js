import React, { Component } from "react";
import "./WinButton.css";
export default class WinButton extends Component {
  constructor(id, winType, winShortSummary) {
    super();
    this.state = {};
    this.state.id = id;
    this.state.winType = winType;
    this.state.winShortSummary = winShortSummary;
  }

  render() {
    return (
      <p class="win-button">
        <button
          class="btn btn-outline-secondary btn-sm btn-block"
          type="button"
          data-toggle="collapse"
          data-target={"#" + this.state.id.id}
          aria-expanded="false"
          aria-controls={this.state.id.id}
        >
          {this.state.id.winType} {this.state.id.winShortSummary}
        </button>
      </p>
    );
  }
}
