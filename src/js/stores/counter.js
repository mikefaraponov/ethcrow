import {observable, computed, action} from 'mobx';

try {
  // disable: no-vars
  var initialCounter = JSON.parse(localStorage.counter);
} catch(e) {
  initialCounter = 0;
}

export default class Counter {
  @observable counter = initialCounter;
  @action
  onContractAdded = () => {
    return ethcrow.events.ContractAdded().on('data', this.onData);
  }
  @action
  onData = (event) => {
    this.counter += 1;
    localStorage.counter = JSON.stringify(this.counter);
  }
  @action
  reset = () => {
    this.counter = 0;
    localStorage.counter = JSON.stringify(0);
  }
}
