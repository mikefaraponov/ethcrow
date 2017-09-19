export default class ContractsStore {
  @observable contracts = [];
  @computed get contract() {
    return contracts;
  }
  @observable loading = false;
  constructor(accounts) {
    this.accounts = accounts;
  }
  @action
  fetch(address) {
    this.loading = true;
    const fromOrTo = {
      producer: this.accounts,
      consumer: this.accounts,
    };
    ethcrow.getPastEvents('ContractAdded', {
        filter: address ? Object.assign(fromOrTo, {
          address: address,
        }) : fromOrTo
      })
      .map(this.fetchFromBlockchain)
      .map(Contract.of)
      .then(this.fetched);
  }
  fetchFromBlockchain = ({returnValues}) => {
        const {producer, consumer, address} = returnValues;
        const smCont = createContract(address);
        const price = eth.getBalance(address);
        const status = smCont.status.call();
        const pkey = smCont.pkey.call();
        const files = smCont.getPastEvents('FileAdded')
          .map((o) => o.returnValues);
        return Promise.hash({price,
          status, pkey, files, smCont, producer,
          consumer,
          toMe: this.accounts.includes(producer),
        });
      }
  }
  @action
  fetched = (contracts) => {
    this.contracts = contracts;
    this.loading = false;
  }
  onContractAdded() {
    return ethcrow.events.ContractAdded().on('data', (event) => {
      this.fetchFromBlockchain(event)
        .then(Contract.of)
        .then((contract) => this.contracts.push(contract));
    });
  }
}
