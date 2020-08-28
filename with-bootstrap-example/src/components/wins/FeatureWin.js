import React, { Component } from "react";
import "./PatternWin.css";
import WinButton from "./WinButton";

export default class FeatureWin extends Component {
  render() {
    return (
      <div>
        <WinButton
          id="featureWinId"
          winType="Feature Win"
          winShortSummary="CARTMAN"
        />
        <div
          class="collapse"
          id="featureWinId"
          style={{ marginBottom: "0.4em" }}
        >
          <div class="card card-body">You won CARTMAN feature</div>
        </div>
      </div>
    );
  }
}
