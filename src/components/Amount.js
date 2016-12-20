import React, { Component } from 'react';

class Amount extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <select onChange={this.props.onChange}>
          <option value="">Choose how many people will eat his cacke</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
      </select>
    );
  }
}

export default Amount
