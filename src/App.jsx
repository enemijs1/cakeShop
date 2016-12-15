import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import BuildType from './components/BuildType';
import DefinedCakes from './DefinedCakes';

@observer
class App extends Component {
  render() {
     const {cakeSettings, timer} = this.props.appState;
     const state =  this.props.appState;

    return (
      <div>

      {cakeSettings.buildType === 'standart' && <DefinedCakes/> }

      <BuildType onClick={this.chooseType}/>
      {cakeSettings.buildType == 'custom' &&
        <div>
          <select onChange={this.onChangeShape}>
                <option value="">Choose Shape of your cacke</option>
                <option value="square">square</option>
                <option value="circle">circle</option>
                <option value="heart">heart</option>
            </select>

            {cakeSettings.shape &&
                <select onChange={this.onChangeAmountPeople}>
                    <option value="">Choose how many people will eat his cacke</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </select>
            }
          </div>
        }
            <div>
              {cakeSettings.buildType === 'custom' &&
                <div>
                  {cakeSettings.shape &&
                      <div>Shape: <b>{cakeSettings.shape} </b> <br/></div>
                  }
                  {cakeSettings.shape && cakeSettings.amountOfPeople &&
                      <div>
                          How many will eat: <b> {cakeSettings.amountOfPeople} </b><br/>
                          <div>How many kg should I get?:</div> <b> {cakeSettings.suggestedWeight} </b><br/>
                          <input type="text" onChange={this.onChangeAmountPeople} value={cakeSettings.amountOfPeople} />
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

  chooseType = (event) => {
    const type = event.target.dataset.type;

        this.props.appState.changeBuildType(type);
  }

  onChangeShape = (event) => {
      this.props.appState.changeShape(event);
  }

  onChangeAmountPeople = (event) => {
      this.props.appState.changeAmountOfPeople(event);
      this.props.appState.suggestHowManyKg(event.target.value);
  }
};

export default App;
