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
 import NewCharactersForm from './components/NewCharactersForm'




function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path="/characters/new">
            <NewCharactersForm/>
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
