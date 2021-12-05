require("@nomiclabs/hardhat-waffle")

const private_key = process.env.METAMASK_POLYGON_TESTNET;
const project_id = process.env.INFURA_PROJECT_NEXT_NFT_POLYGON;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${project_id}`,
      accounts: [private_key]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}