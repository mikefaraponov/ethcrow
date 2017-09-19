import Web3Driver from 'web3';

const ETH_ABI = process.env.ETH_ABI;
const ETH_ADDR = process.env.ETH_ADDR;
const CONTRACT_ABI = process.env.CONTRACT_ABI;
const _web3 = window.web3;
const Web3 = window.Web3;
const ethereumProvider = window.ethereumProvider;

const provider = (typeof _web3 !== 'undefined' &&
  (_web3.currentProvider || _web3.givenProvider)) ||
  (typeof Web3 !== 'undefined' && Web3.givenProvider) ||
  (typeof ethereumProvider !== 'undefined' && ethereumProvider) ||
  'ws://localhost:8546';

export const accounts = _web3.eth.accounts;

export const web3 = new Web3Driver(provider);

export const eth = web3.eth;

export const ethcrow = new web3.eth.Contract(ETH_ABI, ETH_ADDR);

export function createContract(address) {
  return new web3.eth.Contract(CONTRACT_ABI, address);
}
