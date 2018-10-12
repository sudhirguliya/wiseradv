import React, { Component } from 'react';

//const API = 'http://staging.wiseradvisor.com/rest/articles/menu';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Resources extends Component {
  constructor(props) {
    super(props);

   	this.state = {
      results: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
  	this.setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      //.then(response => response.json())
      //.then(data => this.setState({ data }));
      .then(data => this.setState({ results: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
  	const { results, isLoading, error  } = this.state;
  	// console.log(results);
  	if (error) {
      return <p>{error.message}</p>;
    }
  	if (isLoading) {
      return <p> <img src="https://i.imgur.com/EATfJf4.gif" />
      </p> ;
    }
    return (
		<div id="layout1196">			
		<nav class="side-nave fl">
			{/*<ul>
		        {results.map(hit =>
		          <li key={hit.id}>
		            <a href={hit.description}>{hit.name}</a>
		          </li>
		        )}
		    </ul> */}
		    <ul>
		        {results.map(hit =>
		          <li key={hit.objectID}>
		            <a href={hit.url}>{hit.title}</a>
		          </li>
		        )}
		      </ul>

		    <ul>
			<li>
			<a href='/article/financial-advice-21/'>Financial Advice</a>
			</li>
			<li>
			<a href='/article/retirement-planning-advisors-17/'>Retirement Planning</a>
			</li>
		     
		    </ul>
		</nav>
		</div>
	);
  }
}

export default Resources;