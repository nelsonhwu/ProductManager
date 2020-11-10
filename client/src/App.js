import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import React from 'react';
import { Router } from '@reach/router';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <Detail path="products/:id" />
      </Router>
      
    </div>
  );
}

export default App;
