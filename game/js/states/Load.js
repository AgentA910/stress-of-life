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
		game.load.path = 'assets/audio/';
		game.load.audio('bg', 'Blue Sea Of 53 Minutes.mp3');
	},
	create: function() {
		console.log("Load: create");
		cursors = game.input.keyboard.createCursorKeys();

		var pathsJSON = game.cache.getJSON('jsonpath');
		this.points = [];
		this.bmd = null;
		for (var i = 1; i < pathsJSON.length; i++) {
			//Adds all of the points from the JSON file to this.points
			this.points.push({x: pathsJSON[i].x, y: pathsJSON[i].y});
		}
        game.paths = [];
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();

        this.plot();

		game.state.start('Play');
	},
	//Code adapted from Phaser motion paths tutorial and the Phaser waveforms project
	plot: function() {
		this.bmd.clear();
		var x = 1 / 800;
		for (var j = 0; j < this.points.length; j++) {
			this.path = [];
			var p = 0;
			for (var i = 0; i <= 1; i += x) {
		        var px = this.math.catmullRomInterpolation(this.points[j].x, i);
		        var py = this.math.catmullRomInterpolation(this.points[j].y, i);

		        this.path.push({x: px, y: py});

		        this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');

		        this.bmd.rect(this.points[j].x[p]-3, this.points[j].y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
		        p++;
		    }
		    game.paths.push(this.path);
		}
	}
}
