var cursors;
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log("Load: preload");
		//For future use of the json file
		game.load.json('jsonpath', 'assets/bullet-paths/path.json');
		game.load.path = 'assets/img/stylesheet/';
		game.load.image('bullet', 'bullet.png');
		game.load.spritesheet('player', 'player.png', 32, 32);
		game.load.spritesheet('bar', 'Bar.png', 32, 32)
		game.load.path = 'assets/audio/';
		game.load.audio('bg', 'Blue Sea Of 53 Minutes.mp3');
	},
	create: function() {
		console.log("Load: create");
		cursors = game.input.keyboard.createCursorKeys();

		var pathsJSON = game.cache.getJSON('jsonpath');
		this.points = [];
		this.time = [];
		for (var i = 0; i < pathsJSON.length; i++) {
			//Adds all of the points from the JSON file to this.points
			this.points.push({x: pathsJSON[i].x, y: pathsJSON[i].y});
			this.time.push(pathsJSON[i].time);
		}
        game.paths = [];

        this.plot();

		game.state.start('Play');
	},
	//Code adapted from Phaser motion paths tutorial and the Phaser waveforms project
	plot: function() {
		for (var j = 0; j < this.points.length; j++) {
			var x = 1 / (this.time[j]*60);
			this.path = [];
			for (var i = 0; i <= 1; i += x) {
		        var px = this.math.catmullRomInterpolation(this.points[j].x, i);
		        var py = this.math.catmullRomInterpolation(this.points[j].y, i);

		        this.path.push({x: px, y: py});
		    }
		    game.paths.push(this.path);
		}
	}
}
