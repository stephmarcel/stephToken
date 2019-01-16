var SMKCoinERC20 = artifacts.require("./SMKCoinERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(SMKCoinERC20);
};

//var SMKCoin = artifacts.require("./SMKCoin.sol");

//module.exports = function(deployer) {
//  deployer.deploy(SMKCoin);
//};
