import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News React App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/topStories">
                    Top Stories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Market">
                    Market
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/weather">
                    Weather
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
