pragma solidity ^0.8.0;

contract EtherTransfer {
        //receive is the key word called automatically to transfer funds to the contract
        receive() external payable {}

        function sendEther(address recipient, uint256 amount) external {
        require(address(this).balance >= amount, "Insufficient balance in contract");
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "transaction failed");
}
}
