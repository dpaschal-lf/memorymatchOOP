

class MemoryMatchStats{
	constructor(options){
		this.options = options;
		var defaultOptions = {
			gamesPlayedDisplay: $("#played"),
			cardsMatchedDisplay: $("#matches"),
			accuracyDisplay: $("#accuracy"),
		}
		this.values = {
			games: 0,
			matches: 0,
			total: 0,
			accuracy: 0,
			clicks: 0
		}
		this.render();
	}
	change(stat, value){
		this.values[stat] = value;
	}
	update(stat, value){
		if(isNaN(value)){
			console.error('must be a number');
			return;
		}
		this.values[stat] += value;
		if(stat=== 'matches' || stat ==='clicks'){
			this.calculateAccuracy();
		}
		this.render();
	}
	get(stat){
		return this.values[stat];
	}
	calculateAccuracy(){
		if(this.values.clicks===0 || this.values.matches===0){
			this.values.accuracy = 0;
		}
		debugger;
		this.values.accuracy = this.values.matches / this.values.clicks
	}
	render(){
			this.options.gamesPlayedDisplay.text(this.get('games'));
			this.options.cardsMatchedDisplay.text(this.get('matches'));
			this.options.accuracyDisplay.text( (this.get('accuracy')*100).toFixed(2));
	}
}




