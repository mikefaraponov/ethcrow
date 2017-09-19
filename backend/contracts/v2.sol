contract Escrow {
    enum Status { Created, Accepted, Rejected }
    event FileAdded(bytes32 path, bytes32 wkey, bytes32 iv);
    event PublicKeyChanged(bytes32 _pkey)
    event StatusChanged(Status status);
    address public consumer;
    address public producer;
    Status public status = Status.Created;
    bytes32 public pkey;
    modifier onlyConsumer() {
        require(msg.sender == consumer);
        _;
    }
    modifier onlyProducer() {
        require(msg.sender == producer);
        _;
    }
    function Escrow(address _consumer, address _producer, bytes32 _pkey) {
        consumer = _consumer;
        producer = _producer;
        pkeyHash = _pkey;
    }
    function setPkey(bytes32 _pkey) public onlyConsumer {
        pkey = _pkey;
        PublicKeyChanged(_pkey);
    }
    function accept() public onlyConsumer {
        producer.send(this.balance);
        status = Status.Accepted;
        StatusChanged(Status.Accepted);
    }
    function reject() public onlyProducer {
        consumer.send(this.balance);
        status = Status.Rejected;
        StatusChanged(Status.Rejected);
    }
    function addFile(bytes32 path, bytes32 wkey, bytes32 iv) public onlyProducer {
        FileAdded(path, wkey, iv);
    }
}

contract Ethcrow {
    address public creator;
    event ContractCreated(address indexed producer, address indexed consumer, address escrow);
    function Ethcrow() {
        creator = msg.sender;
    }
    function createContract(address producer, bytes32 pkey)
        payable
    {
        Escrow escrow = (new Escrow).value(msg.value)(producer,
            msg.sender, pkey);
        ContractCreated(producer, consumer, escrow);
    }
}

