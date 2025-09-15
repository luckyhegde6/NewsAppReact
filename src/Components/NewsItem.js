import React, { Component } from "react";
import NewsItemDetail from "./NewsItemDetail";

export class NewsItem extends Component {
  render() {
    let {title,
      description,
      imageURL,
      sourceURL }= this.props;
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <img className="w-full h-48 object-cover" src={imageURL} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 line-clamp-2">{title}</div>
          <p className="text-gray-700 text-base line-clamp-3">{description}</p>
          <div className="mt-4">
            <a 
              href={sourceURL} 
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
