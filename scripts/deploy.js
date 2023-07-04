// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

  async function getbalances(address)
 {
  const balanceBigInt=await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt)
 }
 async function consoleBalance(addresses)
 {
  let counter=0;
  for(const address of addresses)
  {
    console.log('address ',counter,' balance:',await getbalances(address))
    counter++;
  }
 }
 async function consoleMemos(memos)
 {
  for(const memo of memos)
  {
    const timestamp=memo.timestamp;
    const name=memo.name;
    const from=memo.from;
    const message=memo.message;
    console.log('at ',timestamp,'name ',name,'from ',from,'message ',message);
  }
 }
async function main() {
 const [owner,from1,from2,from3]=await hre.ethers.getSigners();
 const chai=await hre.ethers.getContractFactory('chai');
 const contract=await chai.deploy();

 await contract.deployed();
 console.log("address of contrac",contract.address);
 const addresses=[owner.address,from1.address,contract.address];
 console.log("before buying...");
 await consoleBalance(addresses);
 const amount={value:hre.ethers.utils.parseEther("1")}
 await contract.connect(from1).buychai("from1","very nice",amount)
 await contract.connect(from2).buychai("from2","very nice chai",amount)
 await contract.connect(from3).buychai("from3","very nice info ",amount)

console.log("after buying chai");
await consoleBalance(addresses);
const memos=await contract.getmemos();
consoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
