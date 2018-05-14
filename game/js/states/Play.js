var player;
var bullet;

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		console.log("Play: preload");
	},
	create: function() {
		console.log("Play: create");
		player = Player(game, 'player');
	},
	update: function() {
		
	}
}
