import React, { Component } from 'react';

class FilmRow extends Component {
  state = {  }
  render() { 

    const film = this.props.data

    return (
      <div className="film-row">
        <figure className="film-poster">
          <img src={"https://image.tmdb.org/t/p/w780/" + film.poster_path} alt="" />
        </figure>

        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{film.release_date}</p>
        </div>
      </div> 
    );
  }
}
 
export default FilmRow;