export default class Contract {
  @observable files = [];
  @observable status = null;
  constructor(contract) {
    this.files = contract.files;
    this.smCont = contract.smCont;
    this.address = contract.smCont.options.address;
    this.producer = contract.producer;
    this.consumer = contract.consumer;
    this.price = contract.price;
    this.pkey = contract.pkey;
    this.status = contract.status;
    this.toMe = contract.toMe;
  }
  onFileAdded() {
    return this.smCont.events.FileAdded().on('data', ({returnValues}) => {
      this.files.push(returnValues);
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
