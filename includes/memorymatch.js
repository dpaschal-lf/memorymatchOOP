

class MemoryMatchGame{
	constructor(optionsObject){
		var defaultOptions = {
			statsArea: $('#stats'),
			cardArea: $('#cards'),
			imageList: ['images/charmander.png']
		}
		this.options = {};
		for(var key in defaultOptions){
			if(optionsObject[key]===undefined){
				this.options[key] = defaultOptions[key]
			} else {
				this.options[key] = optionsObject[key];
			}
		}
		this.cards = [];
		this.cardMatchedCount = 0;
		this.currentClickedCards = [];
		this.statsTracker = null;
	}
	randomizeImages(count = (this.options.imageList.length*2)){
		var newList = [];
		var copiedList = this.options.imageList.slice();
		copiedList = copiedList.concat(copiedList);
		while(newList.length < count){
			var randomIndex = Math.floor( Math.random() * copiedList.length);
			var image = copiedList[randomIndex];
			newList.push(image);
			copiedList.splice(randomIndex, 1);
		}
		return newList;
	}
	handleCardClick( card ){
		if(this.currentClickedCards.length>=2){
			console.log('too many cards are clicked')
			return;
		}
		this.currentClickedCards.push( card );
		card.reveal();
		this.statsTracker.update('clicks', 1);
		if(this.currentClickedCards.length===2){
			if(this.checkForMatch()){
				console.log('they match')
				this.cardMatchedCount+=2;
				this.statsTracker.update('matches', 2);
				if(this.cardMatchedCount === this.cards.length){
					console.log('all cards match')
				}
			} else {
				for(var i=0; i<this.currentClickedCards.length; i++){
					this.currentClickedCards[i].hide(3000);
				}
			}
			this.currentClickedCards = [];
		}
	}
	checkForMatch(){
		var card1 = this.currentClickedCards[0];
		var card2 = this.currentClickedCards[1];
		return card1.getID() === card2.getID()
	}
	makeGameBoard(){
		var imageList = this.randomizeImages();
		for(var imageIndex=0; imageIndex<imageList.length; imageIndex++){
			var optionsObject = {
				front: imageList[imageIndex],
				clickCallback: this.handleCardClick.bind(this)
			}
			var card = new Card( optionsObject );
			this.cards.push(card);
			var domElement = card.render();
			this.options.cardArea.append( domElement );
		}
	}
	initializeStats(){
		var options = {
			gamesPlayedDisplay: $("#played"),
			cardsMatchedDisplay: $("#matches"),
			accuracyDisplay: $("#accuracy"),
		}
		this.statsTracker = new MemoryMatchStats(options);

	}

}







