pragma solidity ^0.5.16;

contract MyContract {
    // Public functions are part of the contract interface and can be either called internally or via messages. 
    // For public state variables, an automatic getter function (see below) is generated.
    string public functionCalled;
    // External functions are part of the contract interface, which means they can be called from other contracts and via transactions. 
    // An external function f cannot be called internally 
    function sendEther() external payable {
        functionCalled = 'sendEther';
    }
    // payable allows a function to receive ether while being called 
    function() external payable {
        functionCalled = 'fallback';
    }
}

