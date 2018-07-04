var game = null;
$(document).ready( initialize );
 
function initialize(){
	var options = {
		statsArea : $('.statsArea'),
		cardArea : $(".cardArea")
	}
	game = new MemoryMatchGame( options );
}