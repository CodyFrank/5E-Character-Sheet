import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
 } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/characters">
          <CharactersContainer/>
        </Route>
        <Route path="/">
          
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
