require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.10",
    networks: {
        mainnet: {
            url: process.env.INFURA_MAINNET_ENDPOINT,
            accounts: [process.env.PRIVATE_KEY_TEST],
        },
        goerli: {
            url: process.env.INFURA_GOERLI_ENDPOINT,
            accounts: [process.env.PRIVATE_KEY_TEST],
        },
    },
}
