

class MemoryMatchGame{
	constructor(optionsObject){
		debugger;
		var defaultOptions = {
			statsArea: $('#stats'),
			cardArea: $('#cards'),
		}
		this.options = {};
		for(var key in defaultOptions){
			if(optionsObject[key]===undefined){
				this.options[key] = defaultOptions[key]
			} else {
				this.options[key] = optionsObject[key];
			}
		}
	}
	makeGameBoard(){
		
	}
}