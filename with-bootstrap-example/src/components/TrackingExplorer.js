import React, { Component } from "react";
import TrackingDataTable from "./TrackingDataTable";
import { jsonResponse } from "./SampleResponse";

export default class TrackingExplorer extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
      userId: null,
      serverId: null,
      data: null
    };
    this._onSearchClick = this._onSearchClick.bind(this);
  }

  _onSearchClick(ev) {
    ev.preventDefault();
    this.setState({ showComponent: true });
  }

  renderTrackingDataTable() {
    return <TrackingDataTable id={this.getTrackingData} />;
  }

  getTrackingData() {
    JSON.stringify(jsonResponse);
    return jsonResponse;
  }

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Standardized Tracking Explorer
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="User"
                aria-label="User"
                value={this.state.userId}
              />
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Game"
                aria-label="Game"
                value={this.state.gameId}
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this._onSearchClick}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div class="container mt-5 align-middle">
          {this.state.showComponent ? this.renderTrackingDataTable() : null}
        </div>
      </React.Fragment>
    );
  }
}
