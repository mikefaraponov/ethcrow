module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
  },
  rpc: {
    host: 'localhost',
    port: 8545,
  },
  migrations_directory: './migrations'
};
