import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: '',
      data: [],
    }
    this.handleInputPokemon = this.handleInputPokemon.bind(this)
    this.handleApiPokemon = this.handleApiPokemon.bind(this)
  }

  // Será responsável por colocar no state o valor digitado no input.
  handleInputPokemon(event) {
    const { target } = event
    this.setState({
      pokemon: target.value
    })
  }

  // Será responsável por consumir a api e trazer os dados do card.
  handleApiPokemon(pokemon) {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
      .then((result) => result.json())
      .then((data) => this.setState({ data: data.cards }))
  }

  render() {
    const { pokemon, data } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pokémon Cards</h2>
          <div>
            <input onChange={(e) => this.handleInputPokemon(e)} data-testid="input-pokemon" />
            <button onClick={() => this.handleApiPokemon(pokemon)} >Pesquisar</button>
          </div>
          <div>
            {data && (
              data.map((pokemon) => (
                <div>
                  <h3>{pokemon.name}</h3>
                  <img src={pokemon.imageUrl} />
              </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
