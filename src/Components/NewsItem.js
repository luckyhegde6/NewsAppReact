import React, { Component } from "react";
import NewsItemDetail from "./NewsItemDetail";

export class NewsItem extends Component {
  render() {
    let {title,
      description,
      imageURL,
      sourceURL }= this.props;
    return (
      <div className="container">
        <div className="card" style={{ width: "20rem" }}>
          <img src={imageURL} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <a href={sourceURL} className="btn btn-sm btn-primary">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
