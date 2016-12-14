import { action, observable } from 'mobx'

class AppState {
    @observable timer = 0;
    @observable cakeSettings = [{
        shape: null,
        amountOfPeople: null,
        suggestedWeight: null,
    }];

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @action changeShape(event) {
        this.cakeSettings.shape = event.target.value;
    }

    @action changeAmountOfPeople(event) {
        this.cakeSettings.amountOfPeople = event.target.value;
    }

    @action suggestHowManyKg(peopleCount) {
        switch (peopleCount) {
            case '5':
                this.cakeSettings.suggestedWeight =  '0.5kg';
                break;
            case '10':
                this.cakeSettings.suggestedWeight =  '1kg';
                break;
            case '15':
                this.cakeSettings.suggestedWeight =  '1.5kg';
                break;
            case '20':
                this.cakeSettings.suggestedWeight =  '2kg';
                break;
            case '25':
                this.cakeSettings.suggestedWeight =  '2.5kg';
                break;
            case '30':
                this.cakeSettings.suggestedWeight =  '3kg';
                break;
            default:
        }
    }

    resetTimer() {
        this.timer = 0;
    }
}

export default AppState;
