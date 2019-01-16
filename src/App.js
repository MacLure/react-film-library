import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import TMDB from './TMDB.js'

class App extends Component {
  render() {

    const films = TMDB.films;

    return (
      <div className="film-library">
      <FilmListing films={films} />
      <FilmDetails films={films} />


    </div>
    );
  }
}

export default App;
