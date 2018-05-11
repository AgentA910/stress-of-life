var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log("Load: preload");
		game.load.json('version', 'assets/bullet-paths/path.json');
		game.load.sprite('bullet', 'assets/img/stylesheet/bullet.png');
	},
	create: function() {
		console.log("Load: create");
		game.state.start('Play');
	},
}
