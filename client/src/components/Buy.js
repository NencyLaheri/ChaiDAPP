import {ethers} from "ethers";
const Buy=({state})=>
{ 
    const buychai=async(event)=>
    {
        event.preventDefault();
        const {contract} = state;
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;
        console.log(name,message,contract);
        const value={value:ethers.utils.parseEther("0.001")};
        const transaction=await contract.buychai(name,message,value);
        await transaction.wait();
        console.log("transaction is done");                                                     
    }
    return (<>
    <form onSubmit={buychai}>
        <label>Name:</label>
        <input type='text' id='name' placeholder="enter your name" />
        <label>Message:</label>
        <input type='text' id='message' placeholder="enter your message" />
        <button type='submit'>pay</button>
    </form>
    </>);
};
export default Buy;