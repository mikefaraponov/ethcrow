import {observable, action, computed} from 'mobx';
import * as crypto from 'utils/crypto';

export default class Keys {
  @observable loading = false;
  @observable loadingKeys = false;
  @observable loadingImport = false;
  @observable publicKey = null;
  @observable privateKey = null;
  publicKeyExport = () => {
    return crypto.exportKey(this.publicKey);
  }
  @action
  initialize() {
    try {
      this.loading = true;
      var {privateKey, publicKey} = JSON.parse(localStorage.keypair);
      console.log(privateKey);
      Promise.all([
          crypto.importRsaKeyPublic(publicKey),
          crypto.importRsaKeyPrivate(privateKey),
        ])
        .then(([publicKey, privateKey]) => {
          this.publicKey = publicKey;
          this.privateKey = privateKey;
          this.loading = false;
        });
    } catch(e) {
      console.log(e.message);
      crypto.generateRsaKey()
        .then((keys) => {
          this.publicKey = keys.publicKey;
          this.privateKey = keys.privateKey;
          return keys;
        })
        .then((keys) => Promise.all([
          crypto.exportKey(keys.publicKey),
          crypto.exportKey(keys.privateKey),
        ]))
        .then(([publicKey, privateKey]) => {
          publicKeyExport = publicKey;
          localStorage.keypair = JSON.stringify({
            publicKey,
            privateKey,
          });
          this.loading = false;
        })
        .catch((err) => this.loading = false)
    }
  }
  @action.bound
  regenerate() {
    this.loadingKeys = true;
    crypto.generateRsaKey()
        .then((keys) => {
          this.publicKey = keys.publicKey;
          this.privateKey = keys.privateKey;
          return keys;
        })
        .then((keys) => Promise.all([
          crypto.exportKey(keys.publicKey),
          crypto.exportKey(keys.privateKey),
        ]))
        .then(([publicKey, privateKey]) => {
          localStorage.keypair = JSON.stringify({
            publicKey,
            privateKey,
          });
          this.loadingKeys = false;
        })
        .catch((err) => this.loadingKeys = false)
  }
  @action.bound
  importKeys(event) {
    const fr = new FileReader();
    this.loadingImport = true;
    fr.onloadend = () => {
      try {
        const {publicKey, privateKey} = JSON.parse(fr.result);
        Promise.all([
            crypto.importRsaKeyPublic(publicKey),
            crypto.importRsaKeyPrivate(privateKey),
          ])
          .then(([publicKey, privateKey]) => {
            this.publicKey = publicKey;
            this.privateKey = privateKey;
            alert('Success!');
            this.loadingImport = false;
          })
          .catch((err) => {
            alert('Try another file!');
            this.loadingImport = false;
          })
      } catch(e) {
        alert('File is in non correct format! Try more!');
      }
      this.loadingImport = false;
    };
    fr.readAsText(event.target.files[0]);
  }
  @action.bound
  exportKeys() {
    const $a = document.createElement('a');
    $a.href = URL.createObjectURL(new Blob([localStorage.keypair], {
      type: 'application/json',
    }));
    $a.download = 'keypair.json';
    document.body.appendChild($a);
    $a.click();
    document.body.removeChild($a);
  }
}
