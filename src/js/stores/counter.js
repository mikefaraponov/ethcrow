

try {
  var initialCounter = JSON.parse(localStorage.counter);
} catch(e) {
  initialCounter = 0;
}

export default class Counter {
  @observable counter = initialCounter;
  @action
  onContractAdded() {
    return ethcrow.events.ContractAdded().on('data', (event) => {
      this.counter += 1;
    });
  }
  @action
  reset() {
    this.counter = 0;
  }
}
