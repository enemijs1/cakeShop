import React, { Component } from 'react';

class BuildType extends Component {
  constructor(props) {
    super();
  }
  render() {
    return(
      <img src={this.props.src} />
    );
  }
}

export default BuildType
