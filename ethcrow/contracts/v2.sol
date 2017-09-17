contract Escrow {
    address consumer;
    address producer;
    bytes32 name;
    Status status;
    uint price;
    bytes32 pkey;
    enum Status { Created, Locked, Accepted, Rejected }
    event FileAdded(bytes32 path, bytes32 wrappedkey, bytes32 iv);
    function Escrow(address _consumer, address _producer,
        bytes32 _name, uint _price, bytes32 _pkey) {
        consumer = _consumer;
        producer = _producer;
        name = _name;
        price = _price;
        pkey = _pkey;
    }
    modifier condition(bool _condition) {
        require(_condition);
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
    function addFile(bytes32 path, uint id) {
        Contract contract = contracts[id];
        require(msg.sender == contract.to);
        require(path.startsWith(contract.from));
        FileAdded(path, id);
    }
}

contract Ethcrow {
    struct User {
        address[] contracts;
    }
    mapping(bytes32=>bool) contractsUniqueName;
    event ContractCreated(address);
    Escrow[] public contracts;
    User[] public users;
    /**
     * [description]
     * @param  {[type]} bytes32 [description]
     * @return {[type]}         [description]
     */
    mapping(bytes32=>uint) usersUidIndex;
    /**
     * [description]
     * @param  {[type]} bytes32 [description]
     * @return {[type]}         [description]
     */
    mapping(address=>uint) usersAddressIndex;
    /**
     * [description]
     * @param  {[type]} bytes32 [description]
     * @return {[type]}         [description]
     */
    address public creator;
    /**
     * [description]
     * @param  {[type]} bytes32 [description]
     * @return {[type]}         [description]
     */

    /**
     * [Ethcrow description]
     */
    function Ethcrow() {
        creator = msg.sender;
    }
    /**
     * [signUp description]
     * @param  {[type]} bytes32 uid           [description]
     * @return {[type]}         [description]
     */
    function signUp(bytes32 uid) {
        users.push({
            uid: uid,
        });
        uint currentIndex = users.length - 1;
        usersUidIndex[uid] = currentIndex;
        usersAddressIndex[msg.sender] = currentIndex;
    }
    function createContract(address receiver, bytes32 name, uint price) payable {
        require(contractsUniqueName[name] == false);

    }
    /**
     * [accept description]
     * @return {[type]} [description]
     */
    function acceptContract(uint id) {

    }
    function rejectContract(uint id) {

    }
    /**
     * [unLink description]
     * @return {[type]} [description]
     */
    function unlinkUser() {
        address sender = msg.sender;
        uint index = usersAddressIndex[sender];
        User currentUser = users[index];
        delete usersAddressIndex[sender];
        delete usersUidIndex[currentUser.uid];
        delete users[index];
    }
}

