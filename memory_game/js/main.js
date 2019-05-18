//create array of card objects

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

// create empty array to store pushed cards
var cardsInPlay = [];



// creating function within the variable flipCard
var flipCard = function () {
	// get the attribute data-id from cardElement and store it in variable cardId. cardId = data-id.
	var cardId = this.getAttribute('data-id');
	// log user flipped and using cardId to reference cards array and referencing the key .rank.
	console.log("User flipped " + cards[cardId].rank);
	// pushing the string, the value of rank, into the cardInPlay array
	cardsInPlay.push(cards[cardId].rank);
	// displaying image and suit
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	// this = img, this sets the source attribute of the card that has been clicked, and puts the card image in 
	this.setAttribute('src', cards[cardId].cardImage);
	// time delay 400 milliseconds. if cardsInPlay equals 2, then run the checkForMatch function
	setTimeout(function () {
		if (cardsInPlay.length === 2) {
			checkForMatch(cardId);
		}
	}, 400);
}

var checkForMatch = function () {
	// creates condition if the first card flipped is the same as the second card that is flipped create alert
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		// if the cards are not the same run the below alert
	} else {
		alert("Sorry, try again.");
	}
}


// create DOM elements from cards array 
var createBoard = function () {
	//creating a loop on all cards
	for (var i = 0; i < cards.length; i++) {
		// creating a img element and storing in in variable cardElement
		var cardElement = document.createElement('img');
		// sets back of card img source to png file
		cardElement.setAttribute('src', "images/back.png");
		// giving each card a data id, starting at 0
		cardElement.setAttribute('data-id', i);
		// adding to each card an event listener, on click run flipCard function
		cardElement.addEventListener('click', flipCard);
		// find the element of Id 'game-board' and then adding cardElement to the game-board element
		document.getElementById("game-board").appendChild(cardElement);
	}
}
// calling the createBoard function
createBoard();
