import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {
  state ={
    filter: 'all'
  }
  render() { 

    const handleFilterClick = (filter) => {
      this.setState({filter})
    }

    const films = this.props.films

    return ( 
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        <div className="film-list-filters">
        <div onClick={() => handleFilterClick("all")} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} >
          ALL
          <span className="section-count">{this.props.films.length}</span>
        </div>
        <div onClick={() => handleFilterClick("faves")} className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} >
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
    
        {films.map((film) => 
          <FilmRow key={film.id} data={film} />
        )}

      </div>
     );
  }
}
 
export default FilmListing;