var Ethcrow = artifacts.require("./Ethcrow.sol");
var Escrow = artifacts.require("./Escrow.sol");

module.exports = function(deployer) {
  // deployer.deploy(Escrow);
  // deployer.link(Escrow, Ethcrow);
  deployer.deploy(Ethcrow);
};
