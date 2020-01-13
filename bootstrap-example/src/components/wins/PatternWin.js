import React, { Component } from "react";
import "./PatternWin.css";
import WinButton from "./WinButton.js";

export default class PatternWin extends Component {
  render() {
    return (
      <div>
        <WinButton
          id="patternWinId"
          winType="Pattern Win"
          winShortSummary="400 EUR"
        />
        <div
          class="collapse"
          id="patternWinId"
          style={{ marginBottom: "0.4em" }}
        >
          <div class="card card-body">
            <div class="card">
              <div class="card-body pattern-win-card-body">
                <strong class="card-title">Pattern Win</strong>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <table class="table table-bordered pattern-win-table">
                  <thead>
                    <tr>
                      <th scope="col" />
                      <th scope="col">0</th>
                      <th scope="col">1</th>
                      <th scope="col">2</th>
                      <th scope="col">3</th>
                      <th scope="col">4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">0</th>
                      <td>x</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>x</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>x</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
