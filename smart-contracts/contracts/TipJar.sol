// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TipJar is Ownable {
    struct Tip {
        address from;
        string message;
        uint256 amount;
    }

    Tip[] public tips;

    receive() external payable {
        tips.push(Tip(msg.sender, "", msg.value));
    }

    function sendTip(string memory message) public payable {
        require(msg.value > 0, "Tip must be greater than 0");
        tips.push(Tip(msg.sender, message, msg.value));
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getTips() public view returns (Tip[] memory) {
        return tips;
    }
}
