import {observable, computed, action, toJS} from 'mobx';
import {web3, Escrow, Ethcrow, eth} from 'utils/web3';
import ipfs from 'utils/ipfs';
import Contract from 'models/contract';
import * as crypto from 'utils/crypto';

export default class ContractsStore {
  @observable contracts = [];
  @observable accounts = [];
  @observable loadingContract = false;
  @observable selected = null;
  @observable loadingContracts = false;
  @observable loading = false;
  constructor(keys) {
    this.keys = keys;
  }
  @action.bound
  select(event) {
    this.selected = event.target.value;
  }
  toValues(event) {
    return event.args;
  }
  @action
  initialize() {
    this.loading = true;
    return Promise
      .all([eth.getAccounts(), Ethcrow])
      .then(this.setAccountsAndContract);
  }
  @action.bound
  setAccountsAndContract([accounts, ethcrow]) {
    this.selected = accounts[0];
    this.accounts = accounts;
    this.ethcrow = ethcrow;
    this.loading = false;
  }
  @action
  fetch() {
    this.loadingContracts = true;
    return new Promise((resolve, reject) => {
      this.ethcrow.ContractCreated({}, {fromBlock: 0, toBlock: 'latest'})
        .get(function(err, result) {
          if (err) return reject(err);
          else return resolve(result);
        });
    }).map(o => o.args)
      .map(this.fetchFromBlockchain)
      .map(Contract.of)
      .then(this.fetched);
  }
  @action
  fetchFromBlockchain = (args) => {
    const {producer, consumer, escrow: address} = args;
    return Promise.all([
        Escrow.at(address),
        eth.getBalance(address),
        toJS(this.accounts)
          .map(x => x.toUpperCase())
          .includes(producer.toUpperCase()),
      ])
      .then(([escrow, price, toMe]) => {
        console.log('fuck', price, toMe);
        const files = new Promise((resolve, reject) => {
          escrow.FileAdded({}, {fromBlock: 0})
            .get(function(err, result) {
              if (err) return reject(err);
              else return resolve(result.map(({args}) => ({
                ...args,
                path: web3.utils.hexToUtf8(args.path),
              })));
            });
        });
        return Promise.props({
          price,
          escrow,
          producer,
          consumer,
          toMe,
          address,
          files,
          state: escrow.state.call().then(x => x.toNumber()),
          pkey: escrow.pkey.call(),
        });
      })
  }
  @action
  fetched = (contracts) => {
    this.contracts = contracts;
    this.loadingContracts = false;
  }
  @action
  onContractAdded() {
    return this.ethcrow.ContractCreated({}, {fromBlock: 'pending'})
      .watch((err, {args}) => {
        err && console.error(err);
        if (!this.contracts.map((x) => x.address).includes(args.escrow)) {
          this.fetchFromBlockchain(args)
            .then(Contract.of)
            .then(this.addContract);
        }
      });
  }
  @action.bound
  addContract(contract) {
    this.contracts.push(contract);
  };
  @action.bound
  setProducer(producer) {
    this.producer = producer.target.value;
  }
  @action.bound
  createContract(after) {
    this.loadingContract = true;
    this.keys.publicKeyExport()
      .then(JSON.stringify.bind(JSON))
      .then((pkey) => {
        console.log('Public Key', pkey);
        return this.ethcrow.signEscrow
          .sendTransaction(this.producer, pkey, {
            from: this.selected,
            value: web3.utils.toWei(this.amountOfEther),
          });
      })
      .then(after);
  }
  @action.bound
  setAmountOfEther(e) {
    this.amountOfEther = e.target.value;
  }
}
