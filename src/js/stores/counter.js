import {observable, computed, action} from 'mobx';

export default class Counter {
  @observable counter = 0;
  constructor(contracts) {
    this.contracts = contracts;
  }
  @action
  onContractAdded = () => {
    // return this.contracts.ethcrow.ContractCreated({
    //   producer: this.contracts.accounts,
    //   consumer: this.contracts.accounts,
    // }).watch(this.onData);
  }
  @action
  onData = (err, event) => {
    err && console.error(err);
    this.counter += 1;
    localStorage.counter = JSON.stringify(this.counter);
  }
  @action
  reset = () => {
    this.counter = 0;
    localStorage.counter = JSON.stringify(this.counter);
  }
  @action
  initialize() {
    try {
      // disable: no-vars
      this.counter = JSON.parse(localStorage.counter);
    } catch(e) {
      this.reset();
    }
  }
}
