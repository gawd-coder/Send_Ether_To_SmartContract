const Web3 = require('web3');

// build file generated after executing "> truffle develop"
const MyContract = require('./build/contracts/MyContract.json');

// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
// avoiding the need to explicitly configure promise chains.
const init = async() => {
    const web3 = new Web3('http://localhost:9545');
    // The await operator is used to wait for a Promise. 
    // It can only be used inside an async function within regular JavaScript code; 
    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi, 
        deployedNetwork.address
    );
    // ethereum address of my wallet
    const addresses = await web3.eth.getAccounts();
    
    // call method only reads the data from blockchain and cant modify it so we need to use the send method here
    await contract.methods.sendEther().send({
        from : addresses[0], 
        value : '100000'
    });

    // proof that we called sendEther function
    console.log(await contract.methods.functionCalled().call());

    await web3.eth.sendTransaction({
        from : addresses[0], 
        to : contract.options.address, 
        value : '100000'
    });
    // calling again to check if the value of variable has changed after executing the fallback function
    console.log(await contract.methods.functionCalled().call());

    //sending transaction to a specific address and not a contract
    await web3.eth.sendTransaction({
        from : addresses[0], 
        to : addresses[1], 
        value : '100000'
    });
    console.log(await contract.methods.functionCalled().call());

}

init();