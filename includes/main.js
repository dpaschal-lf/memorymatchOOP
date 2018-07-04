var game = null;
$(document).ready( initialize );
var images = ['images/charmander.png','images/eevee.jpg','images/pikachu.jpg','images/squirtle.png'];
 
function initialize(){
	var options = {
		statsArea : $('.statsArea'),
		cardArea : $(".cardArea"),
		imageList: images
	}
	game = new MemoryMatchGame( options );
	game.makeGameBoard();
}