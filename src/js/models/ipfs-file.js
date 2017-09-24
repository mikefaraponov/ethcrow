import {observable} from 'mobx';

export default class IpfsFile {
  @observable downloaded = false;
  @observable loading = false;
  constructor(args) {
    Object.assign(this, args);
  }
}
