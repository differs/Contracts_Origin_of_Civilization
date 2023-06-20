import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

const config: HardhatUserConfig = {
    solidity: {
      compilers: [
        {
          version: "0.8.16",
        },
        {
          version: "0.5.16",
          settings: {},
        },
        {
          version: "0.5.0",
        },
      ],
    },
    networks:{
      MoonBeam: {
        url: `https://rpc.ankr.com/moonbeam`,
        // gasPrice: 225000000000,
        chainId: 0x504,
        accounts: [process.env.KEY_MOONBEAM as string],
      },  
      sep: {
          url: `https://ethereum-sepolia.blockpi.network/v1/rpc/public`,
          // gasPrice: 225000000000,
          chainId: 11155111,
          accounts: [process.env.SEPOLIA_PRIVATE_KEY as string],
      },
      localhost: {
        url: `http://127.0.0.1:8545`,
        // gasPrice: 225000000000,
        chainId: 1337,
        accounts: [process.env.KEY_GANACHE as string],
      },
      Gnosis: {
        url: `https://rpc.gnosischain.com`,
        // gasPrice: 225000000000,
        chainId: 0x64,
        accounts: [process.env.KEY_Gnosis as string],
      },
      Bsc: {
        url: `https://bsc.publicnode.com`,
        // gasPrice: 225000000000,
        chainId: 0x38,
        accounts: [process.env.KEY_BSC as string],
      },

  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // gnosiscan
    // use this command verify
    // npx hardhat verify --contract contracts/GnosisFly.sol:GnosisFly --network Gnosis 0x20e1AE8Dfff75301E43Bce3FE3D38AD832699383 --show-stack-traces

    // Gnosis Chain
    // apiKey: process.env.API_KEY_GNO as string
    
    // BSC 

    // apiKey: process.env.API_KEY_BSC as string

    // MoonBeam
    apiKey: process.env.API_KEY_MOONBEAM as string


    // ARB

    // apiKey: process.env.API_KEY_ARB as string

  }

};

export default config;
