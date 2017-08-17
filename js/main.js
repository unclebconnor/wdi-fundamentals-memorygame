//definitions

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];


//functions
var checkForMatch = function () {
	//checks matches after 2nd card flipped
	if (cardsInPlay.length===2){
		if(cardsInPlay[0]===cardsInPlay[1]){
			alert("You found a match!");
		} else{
			alert("Sorry, try again.");
		}
	}
};

var flipCard = function (cardId) {
	//flipped card notice
	console.log("User flipped " + cards[cardId]);

	//adds flipped card to array
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};
	

//actions
flipCard(0);
flipCard(1);