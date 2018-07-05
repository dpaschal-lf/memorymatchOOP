

class Card{
	constructor( optionsObject ){
		this.options = {};
		var defaultOptions = {
			back: 'images/background.png',
			front: 'images/background.png',
			clickCallback: function(){}
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
	reveal(){
		this.cardParts.back.hide();
	}
	hide( hideTimer = 0){
		setTimeout( this.hideSelf.bind(this), hideTimer);
	}
	hideSelf(){
		this.cardParts.back.show();
	}
	handleClick(){
		this.options.clickCallback( this );
	}
	getID(){
		return this.options.front
	}
	render(){
		this.cardParts.container = $("<div>",{
			'class': 'cardContainer',
			on: {
				click: this.handleClick.bind(this),
			}
		})
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








