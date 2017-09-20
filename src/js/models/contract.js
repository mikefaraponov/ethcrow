export default class Contract {
  @observable files = [];
  @observable status = null;
  constructor(contract) {
    Object.assign(this, contract, {
      address: contract.smCont.options.address,
    });
  }
  onFileAdded() {
    return this.smCont.events.FileAdded().on('data', ({returnValues}) => {
      this.files.push(new IpfsFile(returnValues));
    });
  }
  onStatusChanged() {
    return this.smCont.events.FileAdded().on('data', ({returnValues}) => {
      this.status = returnValues.status;
    });
  }
  static of(contract) {
    return contract ? new Contract(contract) : null;
  }
}

