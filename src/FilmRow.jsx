import React, { Component } from 'react';
import Fave from './Fave'

class FilmRow extends Component {
  render() { 

    const handleDetailsClick = (film) => {
      console.log(`Fetching details for ${film.title}!`)
    }

    const film = this.props.data

    return (
      <div onClick={() => handleDetailsClick(film) }className="film-row">
        <figure className="film-poster">
          <img src={"https://image.tmdb.org/t/p/w780/" + film.poster_path} alt="" />
        </figure>

        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{film.release_date}</p>
        </div>
        <Fave />
      </div> 
    );
  }
}
 
export default FilmRow;