import React, { Component } from 'react';

class BuildType extends Component {
  render() {
    return(
      <div>
        <button data-type="custom" onClick={this.props.onClick}>Make Cake My self</button>
        <button data-type="standart" onClick={this.props.onClick}>Choose from pre Defined</button>
      </div>
    );
  }
}

export default BuildType
