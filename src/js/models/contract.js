import {observable, action} from 'mobx';
import IpfsFile from 'models/ipfs-file';
import ipfs from 'utils/ipfs';
import {web3} from 'utils/web3';
import * as crypto from 'utils/crypto';

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
    const publicKey = JSON.parse(web3.utils.hexToUtf8(this.pkey));
    fr.onloadend = () => {
      return Promise.all([
        crypto.generateAesKey(),
        crypto.importRsaKeyPublic(publicKey),
      ])
      .then(([key, pkey]) => {
        return Promise.all([crypto.wrapKey(key, pkey), key]);
      })
      .then(([wrappedKey, key]) => {
        const iv = crypto.getRandomValues(new Uint8Array(16));
        return crypto.encrypt(key, iv, fr.result)
          .then((encrypted) => {
            ipfs.files.add({
              path: 'file.zip',
              content: Buffer.from(encrypted)
              }).then(([{hash}]) => {
                return this.escrow.addFile({hash},
                  JSON.stringify(wrappedKey),
                  JSON.stringify(iv), {
                  from: this.producer,
                });
            })
          });
      });
    }
    fr.readAsArrayBuffer(e.target.files[0]);
  }
  static of(contract) {
    return new Contract(contract);
  }
}

