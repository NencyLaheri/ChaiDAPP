import {useState, useEffect } from "react";
const Memos=({state})=>
{
    const [memos,setMemos]=useState([]);
    const {contract}=state;

    useEffect(()=>{
        const memoMessage=async ()=>
        {
            const memos=await contract.getmemos();
            setMemos(memos);
        };
        contract && memoMessage();
    },[contract]);

return (<>
<p>Message</p>
{memos.map((memo)=>{
    return(
        <div>
    
            <p>{memo.name}</p>
            <p>{memo.message}</p>
            <p>{String(memo.timestamp)}</p>
            <p>{memo.from}</p>
        </div>
        // <table>
        //     <tr>
        //         <td>{memo.name}</td><br></br>
        //         <td>{memo.message}</td>
        //         <td>{String(memo.timestamp)}</td>
        //         <td>{memo.from}</td>
        //     </tr>
        // </table>
    );  
})}

</>);
};
export default Memos;