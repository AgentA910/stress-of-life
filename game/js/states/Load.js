var cursors;
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log("Load: preload");
		//For future use of the json file
		//game.load.json('path', 'assets/bullet-paths/path.json');
		game.load.path = 'assets/img/stylesheet/';
		game.load.image('bullet', 'bullet.png');
		game.load.spritesheet('player', 'player.png', 32, 32);
		game.load.path = 'assets/audio/';
		game.load.audio('bg', 'Blue Sea Of 53 Minutes.mp3');
	},
	create: function() {
		console.log("Load: create");
		cursors = game.input.keyboard.createCursorKeys();

		this.bmd = null;
        this.points = {
			'x': [-20, 60, 160, 240, 320, 400, 480, 560, 643],
			'y': [408, 68, 408,  68, 408,  68, 408,  68, 408]
		}
        game.path = [];

        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();

        this.plot();

		game.state.start('Play');
	},
	//Code adapted from Phaser motion paths tutorial
	plot: function() {
		this.bmd.clear();

		var x = 1 / 800;
		
		for (var i = 0; i <= 1; i += x) {
	        var px = this.math.catmullRomInterpolation(this.points.x, i);
	        var py = this.math.catmullRomInterpolation(this.points.y, i);

	        game.path.push({x: px, y: py});

	        this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
	    }

	    for (var p = 0; p < this.points.x.length; p++) {
	        this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
	    }

	}
}
