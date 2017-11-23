pragma solidity ^0.4.4;

contract Tickets{

	address public organizer;
	mapping (address => uint) public tickets;
	uint public totalTickets;
	uint public boughtTickets;

	function Tickets() public{

		organizer = msg.sender;
		totalTickets=100;
		boughtTickets=0;
	}

	function buyTicket() public returns (bool){
		if (boughtTickets>=totalTickets){
			return false;
		}

		tickets[msg.sender]++;
		boughtTickets++;
		return true;
	}
	
	function ticketsLeft() public view returns (uint){
	    return totalTickets-boughtTickets;
	}

    function myTicketsCount() public view returns (uint){
        return tickets[msg.sender];
    }

}