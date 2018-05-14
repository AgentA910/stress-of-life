var cursors;
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log("Load: preload");
		//For future use of the json file
		//game.load.json('path', 'assets/bullet-paths/path.json');
		game.load.path = 'assets/img/stylesheet/';
		game.load.image('bullet', 'bullet.png');
		game.load.image('player', 'player.png', 32, 32);
		game.load.path = 'assets/audio/';
		game.load.audio('bg', 'Blue Sea Of 53 Minutes.mp3');
	},
	create: function() {
		console.log("Load: create");
		cursors = game.input.keyboard.createCursorKeys();
		game.state.start('Play');
	}
}
