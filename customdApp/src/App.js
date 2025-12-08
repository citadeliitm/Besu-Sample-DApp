import React,{useEffect, useState} from 'react';
import { ethers } from 'ethers';
import Transfer from './EtherTransferImpl.js';
import FundContract from './FundContract.js';

function App() {
  const [transfer, setTransfer] = useState(true);
  const [fundTransfer, setFundTransfer] = useState(false);
  const [inputValue, setInputValue] = useState('');

/*  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();
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
   }, []); */

   function handleClick(){
	setTransfer(false);
   }

   function handleChange(e){
  	setInputValue(e.target.value);
   }

   function handleFundTransfer(){
	setTransfer(false);
  	setFundTransfer(true);
   }

   return ( <>
	{ transfer ? (
		<div>
			<h3>Ether transfer to an Externally Owned Account</h3>
			<input type="text" style={{margin:'0px 40px 0px 0px', width: '500px' }} placeholder="Recipient Account Number" id="recipientAN" onChange={handleChange}></input>
			<button onClick={handleClick}>Transfer</button>
			<h3>Fund Contract</h3>
			<button onClick={handleFundTransfer}>Fund Contract</button>
		</div>
	) : (
          	 <div><Transfer recipientAddress={inputValue} fundTransfer={fundTransfer}/></div>
        )}
	</>
   );
}

export default App;
