import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsMain extends Component {
  articles = [
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "David Williams",
        "title": "Sparkles – and a fortified wine – to see in the New Year",
        "description": "The range of fizz to pop open at nightnight is sparkling – or try something richer and calmerTesco Finest Premier Cru Champagne, France NV (£21, Tesco) As I’ve written in these pages before, t This is a golden age for sparkling wine and the choices for giving…",
        "url": "https://amp.theguardian.com/food/2021/dec/26/sparkles-and-a-fortified-wine-to-see-in-the-new-year",
        "urlToImage": "https://i.guim.co.uk/img/media/f4d618e95c6bc99bdcd213587c6b32a5f76c8856/0_0_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=365224d1490cf33f4d6d3a842d3f855a",
        "publishedAt": "2021-12-26T06:00:17Z",
        "content": "Tesco Finest Premier Cru Champagne, France NV (£21, Tesco) As Ive written in these pages before, t This is a golden age for sparkling wine and the choices for giving 2022 a sparkling welcome are more… [+3306 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MacRumors"
        },
        "author": "Juli Clover",
        "title": "10 Tips for Getting the Most Out of Your New Apple Watch",
        "description": "For MacRumors readers who just got a new Apple Watch for the holidays, we've created a list of 10 useful tips and tricks that you won't want to miss in order to get the most out of your new watch, whether you're new to Apple Watch entirely or upgrading from a…",
        "url": "https://www.macrumors.com/guide/apple-watch-10-tips/",
        "urlToImage": "https://images.macrumors.com/t/lgognYBYMJWesu232WrSi3rTtVA=/1600x/article-new/2021/11/apple-watch-cellular-holiday.jpg",
        "publishedAt": "2021-12-26T15:00:00Z",
        "content": "For MacRumors readers who just got a new Apple Watch for the holidays, we've created a list of 10 useful tips and tricks that you won't want to miss in order to get the most out of your new watch, wh… [+12939 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "DuckDuckGo Search Queries Grew 47% in 2021",
        "description": "\"The privacy-focused search engine DuckDuckGo continues to grow rapidly, with the company now averaging over 100 million daily search queries and growing by almost 47% in 2021...\" reports BleepingComputer:\n\nIn 2020, DuckDuckGo received 23.6 billion total sear…",
        "url": "https://yro.slashdot.org/story/21/12/26/2334238/duckduckgo-search-queries-grew-47-in-2021",
        "urlToImage": "https://a.fsdn.com/sd/topics/privacy_64.png",
        "publishedAt": "2021-12-26T23:59:00Z",
        "content": "In 2020, DuckDuckGo received 23.6 billion total search queries and achieved a daily average of 79 million search queries by the end of December.In 2021, DuckDuckGo received 34.6 billion total search … [+547 chars]"
    }
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
async componentDidMount() {
  let url = `https://newsapi.org/v2/top-headlines?country=${process.env.REACT_APP_COUNTRY_CODE}&apiKey=${process.env.REACT_APP_NEWS_APIKEY}`;
  let response = await fetch(url);
  let parsedResponse = await response.json();
  if(parsedResponse.status === "ok") 
  {
    let data = parsedResponse.articles;
    this.setState({articles: data})
  }
  else
  {
    alert(parsedResponse.message);
  }
  

}

  render() {
    return (
      <div className="container my-3">
        <h2>Top Stories</h2>
        <div className="row">
        {this.state.articles.map((element) => {
          return (
            
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0,45) : ""}
                  description={element.description.slice(0,80)}
                  imageURL={element.urlToImage}
                  sourceURL={element.url}
                />
              </div>
          );
        })}
         </div>
      </div>
    );
  }
}

export default NewsMain;
