export default class IpfsFile {
  @observable downloaded = false;
  @observable loading = false;
  constructor(returnValues) {
    Object.assign(this, returnValues);
  }
}
