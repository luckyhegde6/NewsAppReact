import "./App.css";
import Navbar from "./Components/Navbar";

import React, { Component } from "react";
import NewsMain from "./Components/NewsMain";

export default class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <NewsMain />
        </main>
      </div>
    );
  }
}
