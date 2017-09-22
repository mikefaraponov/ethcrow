import Network from 'stores/network';
import Newsletter from 'stores/newsletter';
// import Contracts from 'stores/contracts';
// import Counter from 'stores/counter';
import Ipfs from 'stores/ipfs';
import ipfs from 'utils/ipfs';
// import Menu from 'stores/menu';
import axios from 'utils/axios';
window.ipfs = ipfs;
export default {
  // contracts: new Contracts(node, web3, ethcrow),
  network: new Network(),
  newsletter: new Newsletter(axios),
  ipfs: new Ipfs(ipfs),
  // counter: new Counter(),
  // menu: new Menu(),
};
