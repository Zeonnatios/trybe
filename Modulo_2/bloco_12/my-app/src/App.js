import React, { Component } from 'react';
import Event from './Event';

// Criando Componente
class App extends Component {

  // Construtor
  constructor(props) {
    super(props);
    this.state = { nome: this.props.nome };
  }
  render() { 
    return ( 
      <div>
        <h1>{ this.state.nome }</h1>
        <Event />
      </div>
     );
  }
}
 
export default App;