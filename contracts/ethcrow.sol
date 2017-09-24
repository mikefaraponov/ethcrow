pragma solidity ^0.4.15;

import "./Escrow.sol";

contract Ethcrow {
    address public creator;

    event ContractCreated(
        address indexed consumer,
        address indexed producer,
        address escrow);

    function Ethcrow() {
        creator = msg.sender;
    }

    modifier notTheSameAsSender(address _producer) {
        require(msg.sender != _producer);
        _;
    }

    function signEscrow(address producer, bytes32 pkey)
        public payable notTheSameAsSender(producer) {
        address escrow = (new Escrow)
            .value(msg.value)(msg.sender, producer, pkey);
        ContractCreated(msg.sender, producer, escrow);
    }

    function() payable {}
}
