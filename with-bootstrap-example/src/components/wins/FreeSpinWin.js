import React, { Component } from "react";
import "./PatternWin.css";
import $ from "jquery";
import WinButton from "./WinButton";

export default class FreeSpinWin extends WinButton {
  constructor() {
    super(null, null);
  }

  render() {
    return (
      <div>
        <WinButton
          id="collapseExample"
          winType="Free Spins"
          winShortSummary="x2"
        />
        <div
          class="collapse"
          id="collapseExample"
          style={{ marginBottom: "0.4em" }}
        >
          <div class="card card-body">You won 2 free spins</div>
        </div>
      </div>
    );
  }
}
