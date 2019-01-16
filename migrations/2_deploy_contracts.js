// var SMKCoinERC20 = artifacts.require("./SMKCoinERC20.sol");
//
// module.exports = function(deployer) {
//   deployer.deploy(SMKCoinERC20);
// };

var SMKCoin = artifacts.require("./SMKCoin.sol");

module.exports = function(deployer) {
const _name = "SMKCoin";
const _symbol = "SMK";
const _decimals = 18;

 deployer.deploy(SMKCoin, _name, _symbol, _decimals);

};
