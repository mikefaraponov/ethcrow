import Network from 'stores/network';
import Newsletter from 'stores/newsletter';
// import Contracts from 'stores/contracts';
// import Counter from 'stores/counter';
import axios from 'utils/axios';

export default {
  // contracts: new Contracts(node, web3, ethcrow),
  network: new Network(),
  newsletter: new Newsletter(axios),
  // counter: new Counter(),
};
