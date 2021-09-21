Sending Ether to an Ethereum Smart Contract with Web3 and Truffle

# Install

This project uses Node Version Manager : `nvm`, `Node`,`Node Package Manager` : `npm`, `Web3`, `Truffle` and `Ganache-CLI`. Go check them out if you don't have them locally installed.

$ `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

$ `nvm install node`

$ `npm install -g web3`

$ `npm install -g truffle`

# Interpretation :

Use `truffle init` to create a bare Truffle project with no smart contracts included. 

Created `MyContract.sol` under contracts folder and added all calling functions for smart contract and reading data from blockchain in it. 
After that I have created the script file `index.js` under contracts folder and added all code for running transactions on our testing framework using `Truffle` and `Ganache`. 

Run `truffle compile` to compile the contracts. After compiling you will have a build folder in your main folder and it contains all ABI files ( abi is a json that describes all the functions of smart contract that can be called from outside ) made after the compilation step

Starting ganache instance with `truffle develop` command to deploy the contract. Once the truffle console is ready run `migrate --reset`. Now you can see the network key has changed in MyContract.json under build and contains deployed address

<img width="1440" alt="Screenshot 2021-09-21 at 5 16 55 PM" src="https://user-images.githubusercontent.com/57283161/134173368-c9dc625a-e555-45a1-83e4-503466e3fee1.png">


Finally ran `node index.js` to run the script

# Contributing

Feel free to dive in! Open an issue or submit PRs.
