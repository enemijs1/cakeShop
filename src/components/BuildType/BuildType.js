import React, { Component } from 'react';

import styles from './style.css';

class BuildType extends Component {
  constructor(props) {
    super();
  }
  render() {
    return(
      <div className={styles.buttonWrapper}>
        <button className={styles.button} data-type="custom" onClick={this.props.onClick}>Make Cake My self</button>
        <button className={styles.button} data-type="standart" onClick={this.props.onClick}>Choose from pre Defined</button>
      </div>
    );
  }
}

export default BuildType
