import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsMain extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      articlesCount: 0,
      totalArticles : 0
    };
  }
  handleNextPageClick = async () => {
this.setState({
  page : this.state.page + 1
});
let url = `https://newsapi.org/v2/top-headlines?country=${import.meta.env.VITE_COUNTRY_CODE}&apiKey=${import.meta.env.VITE_NEWS_APIKEY}&page=${this.state.page + 1}`;
let response = await fetch(url);
let parsedResponse = await response.json();
if (parsedResponse.status === "ok") {
  let data = parsedResponse.articles;
  this.setState({ articles: data , articlesCount : this.state.articlesCount + data.length});
} else {
  alert(parsedResponse.message);
}
  }

  handlePrevPageClick = async () => {
    this.setState({
      page : this.state.page - 1
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${import.meta.env.VITE_COUNTRY_CODE}&apiKey=${import.meta.env.VITE_NEWS_APIKEY}&page=${this.state.page - 1}`;
    let response = await fetch(url);
    let parsedResponse = await response.json();
    if (parsedResponse.status === "ok") {
      let data = parsedResponse.articles;
      this.setState({ articles: data, articlesCount : this.state.articlesCount + data.length });
    } else {
      alert(parsedResponse.message);
    }
  }
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      console.log('Fetching from URL:', `https://newsapi.org/v2/top-headlines?country=${import.meta.env.VITE_COUNTRY_CODE}&apiKey=XXXXX&page=${this.state.page}`);
      let url = `https://newsapi.org/v2/top-headlines?country=${import.meta.env.VITE_COUNTRY_CODE}&apiKey=${import.meta.env.VITE_NEWS_APIKEY}&page=${this.state.page}`;
      let response = await fetch(url);
      let parsedResponse = await response.json();
      console.log('API Response:', parsedResponse);
      if (parsedResponse.status === "ok") {
        let data = parsedResponse.articles;
        this.setState({ 
          articles: data, 
          articlesCount: this.state.articlesCount + data.length,
          totalArticles: this.state.totalArticles + parsedResponse.totalResults,
          loading: false 
        });
      } else {
        console.error('API Error:', parsedResponse.message);
        alert(parsedResponse.message);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      alert('Error fetching news. Please check the console for details.');
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageURL={element.urlToImage}
                  sourceURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-between">
          <button 
            disabled={this.state.page === 1} 
            className={`btn ${this.state.page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={this.handlePrevPageClick}
          >
            Previous
          </button>
          <button 
            className={`btn ${(this.state.articlesCount - this.state.totalArticles) > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={this.handleNextPageClick} 
            disabled={(this.state.articlesCount - this.state.totalArticles) > 0}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default NewsMain;
