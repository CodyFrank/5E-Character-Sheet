import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
 } from 'react-router-dom'
 import CharactersContainer from './containers/CharactersContainer'
 import Home from './components/Home'




function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/characters">
          <CharactersContainer/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
