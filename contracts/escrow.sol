pragma solidity ^0.4.4;

contract Escrow {
    enum State {
        Created,
        Accepted,
        Rejected
    }
    address public consumer;
    address public producer;
    State public state;
    bytes32 public pkey;

    event FileAdded(bytes32 _path, bytes32 _wkey, bytes32 _iv);
    event PublicKeyChanged(bytes32 _pkey);
    event StateChanged(State _state);

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

    function Escrow(address _consumer, address _producer, bytes32 _pkey)
        payable
    {
        consumer = _consumer;
        producer = _producer;
        pkey = _pkey;
    }

    function setPublicKey(bytes32 _pkey) public onlyConsumer {
        pkey = _pkey;
        PublicKeyChanged(_pkey);
    }

    function accept() public onlyConsumer {
        // producer.transfer(this.balance);
        state = State.Accepted;
        StateChanged(State.Accepted);
    }

    function reject() public onlyProducer {
        consumer.send(this.balance);
        state = State.Rejected;
        StateChanged(State.Rejected);
    }

    function addFile(bytes32 path, bytes32 wkey, bytes32 iv) public onlyProducer {
        FileAdded(path, wkey, iv);
    }
}
