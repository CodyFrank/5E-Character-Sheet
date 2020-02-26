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
 import NewCharacterForm from './components/NewCharacter'
 import NewAttack from './components/NewAttack'




function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

        <Route path="/attack/new">
            <NewAttack/>
          </Route> 

          <Route path="/character/new">
            <NewCharacter/>
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
