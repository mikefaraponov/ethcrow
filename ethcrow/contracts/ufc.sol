pragma solidity ^0.4.11;

contract V1 {
    uint public z;
    function V1() payable {
        z = msg.value;
    }
}

contract FuckMyMind {
    V1 public v1;
    uint public value;
    /* Constructor */
    function FuckMyMind() payable {
        value = msg.value;
        v1 = (new V1).value(value)();
    }
}
