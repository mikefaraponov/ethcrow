import {observable, computed, action} from 'mobx';
import {web3, Escrow, Ethcrow, eth} from 'utils/web3';
import ipfs from 'utils/ipfs';
import Contract from 'models/contract';
import {toJS} from 'mobx';
import * as crypto from 'utils/crypto';

export default class ContractStore {
  @observable contract = null;
  @observable loadingContract = false;
  constructor(keys, contracts) {
    this.keys = keys;
    this.contracts = contracts;
  }
  @action
  fetch(address) {
    this.loadingContract = true;
    return Promise.all([
        Escrow.at(address),
        eth.getBalance(address),
      ])
      .then(([escrow, price]) => {
        const files = new Promise((resolve, reject) => {
          escrow.FileAdded({}, {fromBlock: 0, toBlock: 'latest'})
            .get(function(err, result) {
              console.log(result);
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
          toMe: escrow.producer.call().then((producer) => {
            return this.contracts.accounts.map(x => x.toUpperCase())
              .includes(producer.toUpperCase())
          }),
          address,
          files,
          producer: escrow.producer.call(),
          consumer: escrow.consumer.call(),
          state: escrow.state.call().then(x => x.toNumber()),
          pkey: escrow.pkey.call(),
        });
      })
      .then(Contract.of)
      .then((contract) => {
        console.log(contract.pkey);
        this.contract = contract;
        this.loadingContract = false;
      });
  }
  @action.bound
  addFile(e) {
    ipfs.files.add();
  }
}
