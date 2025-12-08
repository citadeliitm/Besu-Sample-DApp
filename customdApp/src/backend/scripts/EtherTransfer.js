import { ethers } from "ethers";
import dotenv from "dotenv";
import  hre  from "hardhat";
dotenv.config();

async function EtherTransfer() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    console.log("Wallet address:", wallet.address);
    console.log("Wallet: ", (await provider.getBalance(wallet.address)));
    const abi = [
	"function sendEther(address, uint256)"
    ];

    const contract = new ethers.Contract(
    	process.env.CONTRACT_ADDRESS,
        abi,
	wallet
    );

   const recipient = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
   const amount = ethers.parseEther("1.0");
   console.log(amount);

/* uncomment for transferring to contract, unless the contract address has some ethers
we cannot transfer to another EOA (Externally owned account) 
   const tx = {
	to : process.env.CONTRACT_ADDRESS,
	value: ethers.parseEther("1.0")
   };

	console.log(await wallet.sendTransaction(tx));
*/
   console.log("sending 1 ether")
   const tx = await contract.sendEther(recipient, amount);
   console.log("Transaction hash: ", tx.hash);

     

   const receipt = await tx.wait();
   console.log("Transaction block number: "+receipt.blockNumber);

}

//main()
