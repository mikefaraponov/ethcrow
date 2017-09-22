
contract Ethcrow {
    enum Status {
        Created,
        Accepted,
        Rejected
    }
    struct Escrow {
        address public consumer;
        address public producer;
        Status public status;
        bytes32 public pkey;
    }
    event ContractCreated(
        address indexed producer,
        address indexed consumer,
        uint id);
    event FileAdded(uint indexed id, bytes32 path, bytes32 wkey, bytes32 iv);
    event PublicKeyChanged(uint indexed id, bytes32 _pkey);
    event StatusChanged(Status status);
    Escrow[] public contracts;
    address public creator;
    modifier onlyConsumer(uint id) {
        require(msg.sender == contracts[id].consumer);
        _;
    }
    modifier onlyProducer(uint id) {
        require(msg.sender == contracts[id].producer);
        _;
    }
    function Ethcrow() {
        creator = msg.sender;
    }
    function signEscrow(address producer, bytes32 pkey) payable {
        contracts.push(Escrow({
                producer, msg.value, msg.sender, pkey
            }));
        ContractCreated(producer, consumer, contracts.length - 1);
    }
    function setPkey(uint id, bytes32 _pkey) public onlyConsumer(id) {
        contracts[id].pkey = _pkey;
        PublicKeyChanged(id, _pkey);
    }
    function accept(uint id) public onlyConsumer(id) {
        producer.send(this.balance);
        status = Status.Accepted;
        StatusChanged(Status.Accepted);
    }
    function reject(uint id) public onlyProducer(id) {
        consumer.send(this.balance);
        status = Status.Rejected;
        StatusChanged(Status.Rejected);
    }
    function addFile(uint id, bytes32 path, bytes32 wkey, bytes32 iv) public onlyProducer(id) {
        FileAdded(id, path, wkey, iv);
    }
}
