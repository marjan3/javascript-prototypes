import React, { Component } from "react";
import "./ReelsCell.css";

export default class ReelsCell extends Component {
  constructor(data) {
    super();
    this.state = {
      reels: data.data
    };
  }
  render() {
    return (
      <td>
        <table class="table table-bordered reels-table">
          <thead>
            <th scope="col" />
            {this.state.reels[0].map((sym, i) => {
              return <td> {i} </td>;
            })}
          </thead>
          <tbody>
            {this.state.reels.map((row, i) => {
              return (
                <React.Fragment>
                  <tr>
                    <td>{i}</td>
                    {row.map((sym, j) => {
                      return (
                        <td>
                          <img
                            src={
                              "http://default-standard-debug-static-sto-gt5-setup01.nix.cydmodule.com/trackinggfx/colossalcrush/" +
                              sym +
                              ".png"
                            }
                            alt={sym}
                          />
                        </td>
                      );
                    })}
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </td>
    );
  }
}
