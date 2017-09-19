pragma solidity ^0.4.11;

contract Ethcrow {
    enum Status { Created, Locked, Accepted, Rejected }
    event ContractCreated(
        uint id,
        address indexed producer,
        address indexed consumer);
    uint contracts
    event FileAdded(bytes32 path, bytes32 wrappedkey, bytes32 iv);
    struct Contract {
        address consumer;
        address producer;
        bytes32 name;
        Status status;
        uint price;
        bytes32 pkeyHash;
    }
    event FileAdded(bytes32 path, uint id);
    event ContractCreated(
        bytes32 name,
        address from,
        address to,
        uint price
    ); /**
     *
     */
    enum Status { Created, Locked, Accepted, Rejected }
    /**
     *
     */
    Contract[] public contracts;
    /**
     *
     */
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
    function addFile(bytes32 path, uint id) {
        Contract contract = contracts[id];
        require(msg.sender == contract.to);
        require(path.startsWith(contract.from));
        FileAdded(path, id);
    }
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
        address sender = msg.sender;
        contracts.push({
            name: name,
            from: sender,
            to: receiver,
            price: msg.value,
        });
        uint contractIndex = contracts.length - 1;
        contractsUniqueName[name] = true;
        users[usersAddressIndex[sender]].contracts.push(contractIndex);
        users[usersAddressIndex[receiver]].contracts.push(contractIndex);
        ContractCreated(name, sender, receiver, price);
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
