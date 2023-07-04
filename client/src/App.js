import abi from "./contracts/chai.json";
import {useState,useEffect} from 'react';
import {ethers} from 'ethers';
import './App.css';
import Buy from "./components/Buy.js";
import Memos from "./components/Memos.js";
function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  useEffect(()=>{
    const connectWallet=async()=>{
    const contractAddress="0xba6f764A7c71643f617A8F7BcA928b450a0193E0";
    const contractAbi=abi.abi;
    try{
      const { ethereum } = window

      if(ethereum)
      {
        const account =await ethereum.request({method:"eth_requestAccounts"});
      }
      const provider=new ethers.providers.Web3Provider(ethereum);
      const signer=provider.getSigner();
      const contract =new ethers.Contract(contractAddress,contractAbi,signer);
      setState({provider,signer,contract})
    }
    catch(error)
    {
      console.log(error);
    }
  };
  connectWallet();
  },[]);
  // console.log(state);  
  return (
  <div className="App">
  <Buy state={state}></Buy>
  <Memos state={state}></Memos>
  </div>
  );
}

export default App;
