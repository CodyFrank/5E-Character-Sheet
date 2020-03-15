import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom'
 import CharactersContainer from './containers/CharactersContainer'
 import CharacterContainer from './containers/CharacterContainer'
 import Home from './components/Home'




function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/characters/:id">
            <CharacterContainer />
          </Route>
          

          <Route path="/characters">
            <CharactersContainer/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
