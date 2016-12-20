import { action, observable } from 'mobx'

class AppState {
    @observable timer = 0;
    @observable error;
    @observable cakeSettings = [{
        shape: null,
        amountOfPeople: null,
        suggestedWeight: null,
        buildType: null,
    }];

    @observable preview = [{
      shape: {
        round: '//www.bingsbakery.com/images/round_cake-med.png',
        square: '//www.philfooddelivery.com/images/detailed/5/06-square-cake.png?t=1462163189',
        heart: '//www.philfooddelivery.com/images/detailed/5/06-square-cake.png?t=1462163189'
      }
    }];

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @action changeShape(event) {
        this.cakeSettings.shape = event.target.value;
    }

    @action changeBuildType(type) {
      this.cakeSettings.buildType = type;
    }

    @action changeAmountOfPeople(event) {
      const $value = event.target.value;

      if (!$value) {
        this.error = 'No Ammount Selected';
        this.cakeSettings.suggestedWeight = '';
        this.cakeSettings.amountOfPeople = '';

        return false;
      };

      this.error = null;
      this.suggestHowManyKg($value)
      this.cakeSettings.amountOfPeople = $value;
    }

    @action suggestHowManyKg(peopleCount) {
      if (peopleCount < 5){
        this.cakeSettings.suggestedWeight = '0.5kg';
      } else if(peopleCount >= 5 && peopleCount <= 10){
        this.cakeSettings.suggestedWeight = '1kg';
      } else if (peopleCount > 10 && peopleCount < 20){
        this.cakeSettings.suggestedWeight = '2kg';
      } else if(peopleCount >= 20 && peopleCount <= 30){
        this.cakeSettings.suggestedWeight = '2.5kg';
      } else if(peopleCount > 30 && peopleCount < 40){
        this.cakeSettings.suggestedWeight = '3.0kg'
      } else {
        this.cakeSettings.suggestedWeight = '> 4.0kg'
      }
    }

    resetTimer() {
        this.timer = 0;
    }
}

export default AppState;
