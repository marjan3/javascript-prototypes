import React, { Component } from "react";
import WinButton from "./WinButton";

export default class RandomWin extends Component {
  render() {
    return (
      <div>
        <WinButton
          id="randomWinId"
          winType="Random Win"
          winShortSummary="CARTMAN"
        />
        <div
          class="collapse"
          id="randomWinId"
          style={{ marginBottom: "0.4em" }}
        >
          <div class="card card-body">You won something random</div>
        </div>
      </div>
    );
  }
}
