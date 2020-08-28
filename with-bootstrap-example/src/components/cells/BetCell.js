import React, { Component } from "react";

export default class BetCell extends Component {
  constructor(data) {
    super();
    this.state = {
      bet: data.data
    };
  }

  renderBetAmount(betAmount) {
    return (
      <div>
        <p>
          <strong>Bet Amount: </strong> {betAmount.amount}
        </p>
        <p>
          <strong>Bet currency: </strong> {betAmount.currency}
        </p>
      </div>
    );
  }

  render() {
    return (
      <td>
        {this.state.bet.betAmount
          ? this.renderBetAmount(this.state.bet.betAmount)
          : null}
        <p>
          <strong>Bet level: </strong> {this.state.bet.betLevel}
        </p>
        <p>
          <strong>Bet domination: </strong> {this.state.bet.denomination}
        </p>
      </td>
    );
  }
}
