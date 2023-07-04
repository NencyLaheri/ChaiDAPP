require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ganache");


// /** @type import('hardhat/config').HardhatUserConfig */
// // require('dotenv').config();
// // const GOERLI_URL=process.env.GOERLI_URL;

// // const PRIVATE_KEY=process.env.PRIVATE_KEY;

// module.exports={
//   solidity:"0.8.17",
//   networks:{
//     goerli:{
//       url:"https://eth-goerli.g.alchemy.com/v2/mRmibo5372DY3UFBa8bu5ZLcRJV-2enW",
//       accounts:["e68443b86a207eec83c75f88ef0189e98c5373a18e2a118bca1bb2a977c78dcf"],
//     development: {
//       url:"HTTP://127.0.0.1:7545",
//       host: "127.0.0.1",     // Localhost (default: none)
//       port: 7545,            // Standard Ethereum port (default: none)
//       network_id: "*",       // Any network (default: none)
//      },
//     },
//   }    
// };
// // module.exports = {
// //   ganache:{
// //   url: "http://localhost:8545",
// //   chainId: 5777,
// //   accounts: 
// //     {
// //       secretKey: "ac1409024627813d7433cdd116247f674e43fbbe96b458123e081c9a1ce9b7f6",
// //       balance: "",
// //     }
// //   },
// // };


// module.exports={
//   networks: {
//     ganache: {
//       url: 'https://127.0.0.1:7545',
//       chainId: '5777',
//       accounts: [
//         'ac1409024627813d7433cdd116247f674e43fbbe96b458123e081c9a1ce9b7f6'
//       ],
//     },
//   },
// }
module.exports = {
  solidity:"0.8.17",
  networks: {
    ganache: {
      url: `http://127.0.0.1:7545`,
      // network_id: "*",
      // chainId: '5777',
      accounts: [
    
          `44d5e6e612a6cc016565ac8c0a2ab398ecb98cab963143a91109c2420048eac8`
       
        // Add more accounts as needed
      ],
    }
  },
};