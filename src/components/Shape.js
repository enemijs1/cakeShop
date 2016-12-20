import React, { Component } from 'react';

class Shape extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <select onChange={this.props.onChange}>
          <option value="">Choose Shape of your cacke</option>
          <option value="square">square</option>
          <option value="circle">circle</option>
          <option value="heart">heart</option>
      </select>
    );
  }
}

export default Shape
