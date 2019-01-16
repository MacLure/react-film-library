import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {
  render() { 

    const films = this.props.films
    console.log(films)

    return ( 
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        {films.map((film) => 
          <FilmRow key={film.id} data={film} />
        )}

      </div>
     );
  }
}
 
export default FilmListing;