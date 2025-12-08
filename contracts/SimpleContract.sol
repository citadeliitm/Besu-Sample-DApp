pragma solidity ^0.8.0;

contract SimpleStorage {
  uint public storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() view public returns (uint retVal) {
    return storedData;
  }
}
