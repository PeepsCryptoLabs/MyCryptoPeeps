const CryptoPeeps = artifacts.require("CryptoPeeps");

module.exports = async function(deployer) {
  await deployer.deploy(CryptoPeeps);
};
