import hre from "hardhat";

async function main() {
  const { ethers } = hre;
  //console.log(hre);
  if (!ethers) {
    throw new Error("HRE.ethers is undefined");
  }
  const signers = await ethers.getSigners();
//  console.log("Signer address:", signers[0].address);
//  console.log("signers::\n", signers[0]);
//console.log("Account balance:", (await signers[0].getBalance()).toString());
  const contract = await ethers.getContractFactory("EtherTransfer");
  const contractdeploy = await contract.deploy();
  await contractdeploy.waitForDeployment();
  console.log("contract address::", await contractdeploy.getAddress());
  console.log("==============================================");
}

main().catch(console.error);
