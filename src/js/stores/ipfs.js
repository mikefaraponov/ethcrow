import {observable, action} from 'mobx';
import ipfs from 'utils/ipfs';

export default class IPFS {
  @observable loading = true;
  @action
  initialize() {
    ipfs.on('ready', () => this.loading = false);
  }
}
