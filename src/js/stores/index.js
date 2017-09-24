import Network from 'stores/network';
import Newsletter from 'stores/newsletter';
import Contracts from 'stores/contracts';
import Contract from 'stores/contract';
import Counter from 'stores/counter';
import Ipfs from 'stores/ipfs';
import Keys from 'stores/keys';
import Menu from 'stores/menu';

const keys = new Keys();
const contracts = new Contracts(keys);
const contract = new Contract(keys, contracts);

export default {
  keys,
  contracts,
  contract,
  network: new Network(),
  newsletter: new Newsletter(),
  ipfs: new Ipfs(),
  counter: new Counter(contracts),
  menu: new Menu(),
};
