var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log("Load: preload");
		//For future use of the json file
		//game.load.json('path', 'assets/bullet-paths/path.json');
		game.load.path = 'assets/img/stylesheet/';
		game.load.image('bullet', 'bullet.png');
		game.load.image('player', 'player.png', 32, 32);
	},
	create: function() {
		console.log("Load: create");
		game.state.start('Play');
	}
}
