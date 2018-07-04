

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
	makeGameBoard(){
		var imageList = this.randomizeImages();
		for(var imageIndex=0; imageIndex<imageList.length; imageIndex++){
			var optionsObject = {
				front: imageList[imageIndex]
			}
			var card = new Card( optionsObject );
			this.cards.push(card);
			var domElement = card.render();
			this.options.cardArea.append( domElement );
		}
	}

}







