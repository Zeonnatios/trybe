import React from 'react';

class Joke extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      full: {},
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke, full: data }));
  }

  render() {
    const { joke } = this.state;
    return (
      <div data-testid="joke">
        {joke}
      </div>
    );
  }
}

export default Joke;