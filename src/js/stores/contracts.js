import {observable, computed, action} from 'mobx';

export default class ContractsStore {
  @observable contracts = [];
  @observable loading = false;
  toValues = (event) => event.returnValues;
  constructor(accounts, ethcrow) {
    this.accounts = accounts;
    this.ethcrow = ethcrow;
  }
  @computed get contract() {
    return contracts;
  }
  @action
  fetch(address) {
    this.loading = true;
    this.ethcrow.getPastEvents('ContractAdded', {
        filter:  Object.assign({
          producer: this.accounts,
          consumer: this.accounts,
        }, address ? {address} : void 0);
      })
      .map(this.fetchFromBlockchain)
      .map(Contract.of)
      .then(this.fetched);
  }
  @action
  fetchFromBlockchain = ({returnValues}) => {
        const {producer, consumer, address} = returnValues;
        const smCont = createContract(address);
        const price = eth.getBalance(address);
        const status = smCont.status.call();
        const pkey = smCont.pkey.call();
        const files = smCont.getPastEvents('FileAdded').map(this.toValues);
        const toMe = this.accounts.includes(producer);
        return Promise.hash({
          price,
          status,
          pkey,
          files,
          smCont,
          producer,
          consumer,
          toMe,
        });
      }
  }
  @action
  fetched = (contracts) => {
    this.contracts = contracts;
    this.loading = false;
  }
  @action
  onContractAdded() {
    return this.ethcrow.events.ContractAdded().on('data', this.listen);
  }
  @action
  listen = (event) => {
    this.fetchFromBlockchain(event)
      .then(Contract.of)
      .then(this.setContracts);
  };
  @action
  setContracts = (contract) => {
    this.contracts.push(contract);
  };
}
