import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="w-full">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <a className="flex items-center text-xl font-bold text-gray-800 hover:text-gray-700" href="/">
                News React App
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <a 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
                    href="/topStories"
                  >
                    Top Stories
                  </a>
                  <a 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
                    href="/prev"
                  >
                    Prev
                  </a>
                  <a 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
                    href="/next"
                  >
                    Next
                  </a>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
