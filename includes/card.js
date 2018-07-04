

class Card{
	constructor( optionsObject ){
		this.options = {};
		var defaultOptions = {
			back: 'images/background.png',
			front: 'images/background.png'
		}
		this.cardParts = {}
		for(var key in defaultOptions){
			if(optionsObject[key]===undefined){
				this.options[key] = defaultOptions[key]
			} else {
				this.options[key] = optionsObject[key];
			}
		}		
	}
	render(){
		this.cardParts.container = $("<div>").addClass('cardContainer')
		this.cardParts.cardElement = $("<div>").addClass('card');
		this.cardParts.front = $("<div>", {
			'class': 'front',
			css: {
				backgroundImage: 'url('+this.options.front+')'
			}
		})
		this.cardParts.back = $("<div>",{
			'class': 'back',
			css: {
				backgroundImage: 'url('+this.options.back+')'
			}
		});
		this.cardParts.container.append(this.cardParts.cardElement);
		this.cardParts.cardElement.append(this.cardParts.front, this.cardParts.back);

		return this.cardParts.container;
	}
}








