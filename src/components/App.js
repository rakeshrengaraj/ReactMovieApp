import React from 'react';
import MovieResults from './MovieResults';
import FavoriteMovie from './FavoriteMovie';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <div className="container">
          <h2 className="display-4">Movies App</h2>
          <p className="lead">Welcome to the best Movie Database in Town!!</p>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <Router>
          <Switch>
            <Route exact path="/" component={MovieResults}></Route>
            <Route path="/fav" component={FavoriteMovie}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
