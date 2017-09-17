import Web3Driver from 'web3';

const web3 = window.web3;
const Web3 = window.Web3;
const ethereumProvider = window.ethereumProvider;

const provider = (typeof web3 !== 'undefined' &&
  (web3.currentProvider || web3.givenProvider)) ||
  (typeof Web3 !== 'undefined' && Web3.givenProvider) ||
  (typeof ethereumProvider !== 'undefined' && ethereumProvider) ||
  'ws://localhost:8546';

export default new Web3Driver(provider);
