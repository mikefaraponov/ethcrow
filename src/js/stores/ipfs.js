import {observable, action} from 'mobx';

export default class IPFS {
  @observable isReady = false;
  constructor(ipfs) {
    this.ipfs = ipfs;
  }
  @action
  initialize() {
    this.ipfs.on('ready', () => this.isReady = true)
  }
}
