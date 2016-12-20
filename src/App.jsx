import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, computed, observable } from 'mobx'
import DevTools from 'mobx-react-devtools';

import styles from './style.css';

import BuildType from './components/BuildType/BuildType';
import Preview from './components/Preview/Preview';
import Shape from './components/Shape';
import Amount from './components/Amount';
import DefinedCakes from './DefinedCakes';

@observer
class App extends Component {
  render() {
     const {cakeSettings, timer, preview} = this.props.appState;
     const state =  this.props.appState;

    return (
      <div className={styles.background}>
      {state.error}

      {this.getPreview}
      {cakeSettings.buildType === 'standart' && <DefinedCakes/> }

      <BuildType onClick={this.chooseType}/>
      {cakeSettings.buildType == 'custom' &&
        <div>
          <Shape onChange={this.onChangeShape} />

            {cakeSettings.shape &&
                <Amount onChange={this.onChangeAmountPeople} />
            }
          </div>
        }
            <div>
              {cakeSettings.buildType === 'custom' &&
                <div>
                  {cakeSettings.shape &&
                      <div>Shape: <b>{cakeSettings.shape} </b> <br/></div>
                  }
                  {cakeSettings.shape &&
                      <div>
                          How many will eat: <b> {cakeSettings.amountOfPeople} </b><br/>
                          <div>How many kg should I get?:</div> <b> {cakeSettings.suggestedWeight} </b><br/>
                          {this.inputAmount}
                          <div>Chosen Type::</div> <b> {cakeSettings.buildType} </b><br/>
                      </div>
                  }
                  </div>
              }
            </div>
        <DevTools />
      </div>
    );
  }

  @computed get inputAmount() {
    return(
      <input type="text" onChange={this.onChangeAmountPeople} />
    );
  }

  @computed get getPreview() {
    const {cakeSettings, timer, preview} = this.props.appState;

    const cakeSettingsShape = cakeSettings.shape;
    console.log('asd', this.props.appState.cakeSettingsShape);
    // return(
    //   <Preview src={this.props.appState.preview.shape.cakeSettingsShape} />
    // );
  }

  chooseType = (event) => {
    const type = event.target.dataset.type;

    this.props.appState.changeBuildType(type);
  }

  onChangeShape = (event) => {
      this.props.appState.changeShape(event);
  }

  onChangeAmountPeople = (event) => {
      this.props.appState.changeAmountOfPeople(event);
  }
};

export default App;
