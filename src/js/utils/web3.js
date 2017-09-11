import Web3Driver from 'web3';

const UNDEF = 'undefined';

const provider = (typeof web3 !== UNDEF && web3.currentProvider) ||
  (typeof Web3 !== UNDEF && Web3.givenProvider) ||
  (typeof ethereumProvider !== UNDEF && ethereumProvider) ||
  'ws://localhost:8546';

export default new Web3Driver(provider);
