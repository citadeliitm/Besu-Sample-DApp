import React, { useState,useEffect } from 'react';
//import etherTransferContract from './backend/scripts/EtherTransfer.js'
import { ethers } from 'ethers';
import EthersTransferArtifact from './backend/artifacts/contracts/EtherTransfer.sol/EtherTransfer.json';
const EtherTransferContractAddress =  `0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0`

function Transfer({recipientAddress, fundTransfer}) {
	const [resultMessage, setResultMessage] = useState('');
/*	const [isConnected, setIsConnected] = useState(false);
	const [provider, setProvider] = useState({});
	console.log("funds::"+fundTransfer);

	useEffect(() => {
	const connect = async () => {
		if(window.ethereum && !isConnected){
			const accounts = await window.ethereum.request({
					method: 'eth_requestAccounts'
			});
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			setIsConnected(true);
			setProvider(provider);
		}
		console.log(isConnected);
	 };
	connect();
	}, []);
*/
	const metamasklink = async () => {
		try {
			const accounts = await window.ethereum.request({
                                        method: 'eth_requestAccounts'
                        });
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(EtherTransferContractAddress, EthersTransferArtifact.abi,provider.getSigner());
			if(fundTransfer){
                 		console.log("within fund transfer!!");
/*				const tx = {
                        		to : EtherTransferContractAddress,
                        		value: ethers.utils.parseEther("10.0")
                		};
                		//console.log(await wallet.sendTransaction(tx));
				await provider.getSigner().sendTransaction(tx);*/
	  			setResultMessage("Transaction Succeeded for Contract");
				return;
			}
			else {
				const result = await contract.sendEther(recipientAddress, ethers.utils.parseEther("0.5"));
				setResultMessage("Transaction Succeeded");
				return;
			}
		}
		catch (error) {
    			console.error('Transaction error:', error);
			setResultMessage(error.reason);
  		}
	};
	metamasklink();
	console.log("result ", resultMessage);
	return(
		<div>
			{resultMessage}
		</div>
	);
}

export default Transfer
