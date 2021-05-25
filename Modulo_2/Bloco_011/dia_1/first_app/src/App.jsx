import './App.css';
import React from 'react';
import Components from './Components';
import createTask from './createTask';

const tech = ['React', 'NodeJs', 'JavaScript', 'HTML', 'CSS'];

function App() {
  return (
    <div>
      <Components />
      {tech.sort().map((element) => createTask(element))}
    </div>
  );
}

export default App;
