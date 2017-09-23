pragma solidity ^0.4.4;

import "./Escrow.sol";

contract Ethcrow {
    address public creator;

    event ContractCreated(
        address indexed producer,
        address indexed consumer,
        address escrow);

    function Ethcrow() {
        creator = msg.sender;
    }

    modifier notTheSameAsSender(address _producer) {
        require(_producer != msg.sender);
        _;
    }

    function signEscrow(address producer, bytes32 pkey)
        public payable notTheSameAsSender(producer) {
        Escrow escrow = (new Escrow)
            .value(msg.value)(producer, msg.sender, pkey);
        ContractCreated(producer, msg.sender, escrow);
    }
}
