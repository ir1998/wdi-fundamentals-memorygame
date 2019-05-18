// Create an array cards.
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
// current player's hand
var cardsInPlay = [];
// function to store the steps to check for a match
var checkForMatch = function () {
	// check for match equality between the two cards
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};
/* function to store all steps when the user flips a card
each card has click event listener
*/
var flipCard = function () {
	// this keyword points to cardElement
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	// push name of card ie: king 
	cardsInPlay.push(cards[cardId].rank);
	// when user flip both two cards
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	// current-card.setAttribute('attributeName', 'attributeValue');
	// this = cardElement <img src="images/back.png" data-id="0">
	// now set the img match with the cardImage "images/queen-of-diamonds.png"
	this.setAttribute('src', cards[cardId].cardImage);

	// checking to see if two cards have been played
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

// create a new game board
var createBoard = function () {
	// Adding the Card Image and ID
	for (var i = 0; i < cards.length; i++) {
		// create <img>, cardElement is <img>
		var cardElement = document.createElement('img');
		// add a src attribute of "images/back.png" cardElement.setAttribute('attributeName', 'attributeValue');
		// now cardElement is <img src="images/back.png">
		cardElement.setAttribute('src', 'images/back.png');
		// use the setAttribute() method on cardElement once again. Set the card's 'data-id' attribute to be the current index of the card array, i (no quotes). Now, we can track which card it is.
		// data- attributes are meant to store data about an element that is not tied to a style.  now cardElement is <img src="images/back.png" data-id="0">
		cardElement.setAttribute('data-id', i);
		// when a user clicks on a card, the flipCard function is called.
		cardElement.addEventListener('click', flipCard);
		// Append the cardElement ( <img src="images/back.png" data-id="0"> )to the game board (which has an id of game-board). 
		// <div id="game-board"> <img src="images/back.png" data-id="0"></div>
		document.getElementById('game-board').appendChild(cardElement);
	}
};

// run invoke the createBoard()
createBoard();
