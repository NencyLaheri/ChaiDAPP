// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract chai
{
    struct Memo
    {
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memo;
    address payable owner;
    constructor()
    {
        owner=payable(msg.sender);
    }
    function buychai(string memory name,string memory message) public payable 
    {
        require(msg.value>=0,"pay more than 1 ether");
        owner.transfer(msg.value);
        memo.push(Memo(name,message,block.timestamp,msg.sender));
    }
    function getmemos() public view returns(Memo[] memory)
    {
         return memo;
    }
}