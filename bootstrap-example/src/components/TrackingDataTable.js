import React, { Component } from "react";
import ReelsCell from "./cells/ReelsCell.js";
import GameVariables from "./GameVariables.js";
import PatternWin from "./wins/PatternWin.js";
import "./TrackingDataTable.css";
import FreeSpinWin from "./wins/FreeSpinWin.js";
import RandomWin from "./wins/RandomWin.js";
import FeatureWin from "./wins/FeatureWin.js";
import EmptyCell from "./cells/EmptyCell.js";
import RoundCell from "./cells/RoundCell.js";
import StateCell from "./cells/StateCell.js";
import ActionCell from "./cells/ActionCell.js";
import BetCell from "./cells/BetCell.js";

export default class TrackingDataTable extends Component {
  constructor(id) {
    super();
    this.state = {
      jsonData: id.id().content
    };
    debugger;
    // const data = getTrackingData();
    // data - id={ this.state.jsonData }
  }

  render() {
    return (
      <div class="table-responsive small-text-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Round Details</th>
              <th scope="col">State</th>
              <th scope="col">Action</th>
              <th scope="col">Bet Details</th>
              <th scope="col">Reels</th>
              <th scope="col" style={{ width: "100%" }}>
                Wins
              </th>
              <th scope="col">Game Variables</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jsonData.map((trackData, i) => {
              console.log(`key=${i} answer=${trackData}`);
              return (
                <tr>
                  {trackData.roundDetails ? (
                    <RoundCell data={trackData.roundDetails} />
                  ) : (
                    <EmptyCell />
                  )}
                  {trackData.state ? (
                    <StateCell data={trackData.state} />
                  ) : (
                    <EmptyCell />
                  )}
                  {trackData.action ? (
                    <ActionCell data={trackData.action} />
                  ) : (
                    <EmptyCell />
                  )}
                  {trackData.bet ? (
                    <BetCell data={trackData.bet} />
                  ) : (
                    <EmptyCell />
                  )}
                  {trackData.reelSymbols ? (
                    <ReelsCell data={trackData.reelSymbols} />
                  ) : (
                    <EmptyCell />
                  )}
                  <td>
                    <FreeSpinWin />
                  </td>
                  <td>
                    {trackData.gameVariables ? (
                      <GameVariables data={trackData.gameVariables} />
                    ) : (
                      <EmptyCell />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
