import "./App.css";
import Navbar from "./Components/Navbar";

import React, { Component } from "react";
import NewsMain from "./Components/NewsMain";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <NewsMain />
        </div>
      </div>
    );
  }
}
