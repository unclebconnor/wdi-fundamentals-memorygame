//definitions
var cardsInPlay = [];
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];

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
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//adds flipped card to array
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};
	

//actions
flipCard(0);
flipCard(1);