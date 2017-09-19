import IPFS from 'ipfs';

window.Buffer = Buffer;

export default new IPFS({
  start: true,
  EXPERIMENTAL: {
    sharding: true,
    dht: true,
  },
});
