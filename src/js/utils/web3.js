import Web3Driver from 'web3';
import EthcrowArtifact from 'build/contracts/Ethcrow.json';
import EscrowArtifact from 'build/contracts/Escrow.json';
import TruffleContract from 'truffle-contract';

if (typeof window.web3 !== 'undefined') {
  console.log('with web3');
  var _web3Provider = window.web3.currentProvider;
  var _web3 = new Web3Driver(_web3Provider);
} else {
  var _web3Provider = new Web3Driver
    .providers.HttpProvider('http://localhost:8545');
  var _web3 = new Web3(_web3Provider);
}

export const web3Provider = _web3Provider;

export const web3 = _web3;

export const eth = web3.eth;

const EthcrowContract = TruffleContract(EthcrowArtifact);
const EscrowContract = TruffleContract(EscrowArtifact);

EthcrowContract.setProvider(_web3Provider);
EscrowContract.setProvider(_web3Provider);

export const Ethcrow = EthcrowContract.deployed();
export const Escrow = EscrowContract;
