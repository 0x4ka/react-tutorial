import { useState } from "react";
import contractAbi from "./contracts/Counter.json"
import {ethers} from "ethers";

//contract address
const contractAddress = "0x8B4d01818D8213fC30Da5FDe5e20456470044Cc9";
const abi = contractAbi.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const singer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, singer);

function App() {

  const [walletAddress, setWalletAddress] = useState("No Wallet Connection!");
  const [count, setCount] = useState("no count");

  contract.on("UpdatedCount", (from, to, amount, event) => {
    setCount(from[0]);
  });

  const connectWalletHandler = async () => {
    if (!window.ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We are ready to go!");
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch(err) {
      console.log(err);
    }
  }

  const inc = async () => {
    try {
      await contract.inc();
    } catch(err) {
      console.log(err);
    }
  }

  const dec = async () => {
    try {
      await contract.dec();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <h1>Counter Dapp</h1>
        <p>ContractAddress: { contractAddress }</p>
        <p>Wallet Address: { walletAddress }</p>
        <p>count: { count }</p>
        <button onClick={connectWalletHandler}>Connect Wallet</button>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
      </div>
    </div>
  )
}

export default App;