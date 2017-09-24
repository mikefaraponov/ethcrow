import {observable, action} from 'mobx';
import IpfsFile from 'models/ipfs-file';
import ipfs from 'utils/ipfs';
import {web3} from 'utils/web3';

export default class Contract {
  @observable files = [];
  @observable state = null;
  constructor(contract) {
    Object.assign(this, contract);
  }
  onFileAdded() {
    return this.escrow.FileAdded().watch((err, {args}) => {
      err && console.error(err);
      const path = web3.utils.hexToUtf8(args.path);
      this.files.find((o) => o.path === path) ||
        this.files.push(new IpfsFile({
          ...args,
          path,
        }));
    });
  }
  onStateChanged() {
    return this.escrow.StateChanged()
      .watch((err, {args}) => {
        err && console.error(err);
        this.state = args.state.toNumber();
      });
  }
  @action.bound
  accept() {
    this.escrow.accept.sendTransaction({
      from: this.consumer, value: 0, gas: 50000,
    });
  }
  @action.bound
  reject() {
    this.escrow.reject.sendTransaction({
      from: this.producer, value: 0, gas: 50000,
    });
  }
  @action.bound
  addFile(e) {
    const fr = new FileReader();
    fr.onloadend = () => {
      ipfs.files.add({
        path: 'file.zip',
        content: Buffer.from(fr.result)
      }).then(([file]) => {
        return this.escrow.addFile(file.hash, 'fuck', 'fuck', {
          from: this.producer,
        });
      })
    }
    fr.readAsArrayBuffer(e.target.files[0]);
  }
  static of(contract) {
    return new Contract(contract);
  }
}

