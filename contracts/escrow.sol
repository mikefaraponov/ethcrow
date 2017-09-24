pragma solidity ^0.4.15;

contract Escrow {
    enum State {
        Created,
        Accepted,
        Rejected
    }
    address public consumer;
    address public producer;
    State public state;
    bytes public pkey;

    event FileAdded(bytes path, bytes wkey, bytes iv);
    event PublicKeyChanged(bytes pkey);
    event StateChanged(State state);

    modifier inState(State _state) {
        require(state == _state);
        _;
    }

    modifier onlyConsumer() {
        require(msg.sender == consumer);
        _;
    }

    modifier onlyProducer() {
        require(msg.sender == producer);
        _;
    }

    function Escrow(address _consumer, address _producer, bytes _pkey)
        payable
    {
        consumer = _consumer;
        producer = _producer;
        pkey = _pkey;
        state = State.Created;
    }

    function setPublicKey(bytes _pkey) public onlyConsumer {
        pkey = _pkey;
        PublicKeyChanged(_pkey);
    }

    function accept() public onlyConsumer inState(State.Created) {
        state = State.Accepted;
        StateChanged(state);
    }

    function reject() public onlyProducer inState(State.Created) {
        state = State.Rejected;
        StateChanged(state);
    }

    function addFile(bytes path, bytes wkey, bytes iv) public
        onlyProducer inState(State.Created)
    {
        FileAdded(path, wkey, iv);
    }

    function() payable {}
}
