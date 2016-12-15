import React, { Component } from 'react';

class DefinedCakes extends Component {

  constructor(){
    super();

    this.cakes = [
      {
        'name': 'Margarita',
        'size': 'large',
        'type': 'square'
      },
      {
      'name': 'Rudolfs',
      'size': 'small',
      'type': 'square'
      }
    ];

  }


  render() {
    return(
      <div>
        {this.cakes.map((cake, index) => {
          return(
            <div key={index}>
              <span><b>Name: {cake.name}</b></span><br/>
              <span>Size: {cake.size}</span><br/>
              <span>Type: {cake.type}</span><br/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default DefinedCakes
