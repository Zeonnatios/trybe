// importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Importar Componentes
import App from './App';

// Componente
class MyComponent extends React.Component {
  render() {
    return <App />;
  }
}

// Render
ReactDOM.render(<MyComponent />, document.getElementById('root'));
