module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: "*",
    },
  },
  rpc: {
    host: 'localhost',
    port: 8545,
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  migrations_directory: './migrations',
};
