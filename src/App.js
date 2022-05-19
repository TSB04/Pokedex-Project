import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Pokemon from './api/Pokemon';
import './App.css';
import Dashboard from './components/Dashboard';
import backgroundImage from './pattern.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
