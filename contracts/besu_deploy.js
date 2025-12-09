import { Web3 } from 'web3';
//Change the url to LB URL
const web3 = new Web3("http://10.21.227.177:8545");

//This program checks if the contract has been deployed.
//getCode(<deployed contract address>)

const bytecode = await web3.eth.getCode("0x13274Fe19C0178208bCbee397af8167A7be27f6f");
if(bytecode && bytecode.length > 2){
	console.log("Contract deployed:: ", bytecode.length);
} else {
	console.log("No contract")
}

//run using command:: node besu_deploy.js
