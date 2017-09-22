pragma solidity ^0.4.4;

import "./Escrow.sol";

contract Ethcrow {
    address public creator;
    event ContractCreated(address indexed producer, address indexed consumer, address escrow);
    function Ethcrow() {
        creator = msg.sender;
    }
    function escrow(address producer, bytes32 pkey)
        payable
    {
        Escrow escrow = (new Escrow).value(msg.value)(producer,
            msg.sender, pkey);
        ContractCreated(producer, consumer, escrow);
    }
}
