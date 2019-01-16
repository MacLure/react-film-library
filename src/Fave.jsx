import React, { Component } from 'react';

class Fave extends Component {
  state = { 
    isFave: false
   }
  render() { 

    const handleClick = (event) => {
      event.stopPropagation() 
      this.setState({isFave: !this.state.isFave})
    }

    return ( 

      <div onClick={handleClick}className={`film-row-fave ${this.state.isFave === true ? "remove_from_queue" : "add_to_queue"}`}>
        <i className="material-icons">add_to_queue</i>
      </div>

     );
  }
}
 
export default Fave;