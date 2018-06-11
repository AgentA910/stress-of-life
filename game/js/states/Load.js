var cursors;
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log("Load: preload");
		//For future use of the json file
		game.load.path = 'assets/bullet-paths/';
		game.load.json('jsonpath', 'path.json');
		game.load.json('jsonpath2', 'paths2.json');
		game.load.json('jsonpath3', 'paths3.json');
		game.load.path = 'assets/img/stylesheet/';
		game.load.image('gradeF', 'gradeF.png');
		game.load.image('paper', 'paper.png');
		game.load.image('debt', 'debt.png');
		game.load.image('anger', 'anger.png');
		game.load.image('skull', 'skull.png');
		game.load.image('radiation', 'radiation.png');
		game.load.image('poison', 'poison.png');
		game.load.spritesheet('player', 'player.png', 32, 32);
		game.load.spritesheet('bar', 'Bar.png', 32, 300)
		game.load.path = 'assets/audio/';
		game.load.audio('bg1', '253761__caculo__very-noisy-kids-in-classroom.mp3');
		game.load.audio('bg2', '335711__dnlburnett__ambience-busy-office-call-center.wav');
		game.load.audio('bg3', '255581__moz5a__remembered.mp3');
		game.load.audio('slap', '371108__mccormick-iain__slap.wav');
		game.load.path = 'assets/img/background/';
		game.load.image('background1', 'background1.png');
		game.load.image('background2', 'background2.png');
		game.load.image('background3', 'background3.png');
	},
	create: function() {
		console.log("Load: create");
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		//Setup loading bar, from class source for Paddle Parkour
		var loadingBar = this.add.sprite(game.width/2, game.height/2, 'loading');
		loadingBar.anchor.set(0.5);
		game.load.setPreloadSprite(loadingBar);

		game.physics.startSystem(Phaser.Physics.ARCADE);

		cursors = game.input.keyboard.createCursorKeys();

		//Load in the json files from cache to use
		var pathsJSON = game.cache.getJSON('jsonpath');
		var pathsJSON2 = game.cache.getJSON('jsonpath2');
		var pathsJSON3 = game.cache.getJSON('jsonpath3');

		//Temporary things to allow for making the paths
		this.points = [];
		this.points2 = [];
		this.points3 = [];
		this.time = [];
		this.time2 = [];
		this.time3 = [];
		this.inter = [];
		this.inter2 = [];
		this.inter3 = [];

		//Push in the points, time to take, and interpolation type to arrays
		for (var i = 0; i < pathsJSON.length; i++) {
			this.points.push({x: pathsJSON[i].x, y: pathsJSON[i].y});
			this.time.push(pathsJSON[i].time);
			this.inter.push(pathsJSON[i].inter);
		}
		for (var i = 0; i < pathsJSON2.length; i++) {
			this.points2.push({x: pathsJSON2[i].x, y: pathsJSON2[i].y});
			this.time2.push(pathsJSON2[i].time);
			this.inter2.push(pathsJSON2[i].inter);
		}
		for (var i = 0; i < pathsJSON3.length; i++) {
			this.points3.push({x: pathsJSON3[i].x, y: pathsJSON3[i].y});
			this.time3.push(pathsJSON3[i].time);
			this.inter3.push(pathsJSON3[i].inter);
		}

		//Arrays for levels to use
        game.paths = [];
        game.paths2 = [];
        game.paths3 = [];

        //Audio to use when player gets hit
        game.slap = game.add.audio('slap');

        //Plot the paths
        this.plot();
	},
	update: function() {
		if (game.cache.isSoundDecoded('bg1')
        	&& game.cache.isSoundDecoded('bg2')
        	&& game.cache.isSoundDecoded('bg3')
        	&& game.cache.isSoundDecoded('slap')) {
			//Wait until all sound is decoded to start the game
			//For use in debugging/Easter egg, skip to any State when loading
			if (toLoad == 1) {
				console.log("Loading Play1");
				game.state.start('Play1');
			} else if (toLoad == 2) {
				console.log("Loading Play2");
				game.state.start('Play2');
			} else if (toLoad == 3) {
				console.log("Loading Play3");
				game.state.start('Play3');
			} else if (toLoad == 4) {
				console.log("Loading Win");
				game.state.start('Win');
			} else if (toLoad == 5) {
				console.log("Loading Finish");
				game.state.start('Finish');
			}
        }
	},
	//Code adapted from Phaser motion paths tutorial and the Phaser waveforms project
	plot: function() {
		for (var j = 0; j < this.points.length; j++) {
			var x = 1 / (this.time[j]*60);
			this.path = [];
			//Type of interpolation is declared with each path in the path.json file
			if (this.inter[j] == 1) {
				//Do catmull interpolation, so more curves, smoother
				for (var i = 0; i <= 1; i += x) {
			        var px = this.math.catmullRomInterpolation(this.points[j].x, i);
			        var py = this.math.catmullRomInterpolation(this.points[j].y, i);

			        this.path.push({x: px, y: py});
			    }
			} else {
				//Do linear interpolation, straight from one point to the next
				for (var i = 0; i <= 1; i += x) {
					var px = this.math.linearInterpolation(this.points[j].x, i);
					var py = this.math.linearInterpolation(this.points[j].y, i);

					this.path.push({x: px, y: py});
				}
			}
		    game.paths.push(this.path);
		}
		for (var j = 0; j < this.points2.length; j++) {
			var x = 1 / (this.time2[j]*60);
			this.path2 = [];
			//Type of interpolation is declared with each path in the path.json file
			if (this.inter2[j] == 1) {
				//Do catmull interpolation, so more curves, smoother
				for (var i = 0; i <= 1; i += x) {
			        var px = this.math.catmullRomInterpolation(this.points2[j].x, i);
			        var py = this.math.catmullRomInterpolation(this.points2[j].y, i);

			        this.path2.push({x: px, y: py});
			    }
			} else {
				//Do linear interpolation, straight from one point to the next
				for (var i = 0; i <= 1; i += x) {
					var px = this.math.linearInterpolation(this.points2[j].x, i);
					var py = this.math.linearInterpolation(this.points2[j].y, i);

					this.path2.push({x: px, y: py});
				}
			}
		    game.paths2.push(this.path2);
		}
		for (var j = 0; j < this.points3.length; j++) {
			var x = 1 / (this.time3[j]*60);
			this.path3 = [];
			//Type of interpolation is declared with each path in the path.json file
			if (this.inter3[j] == 1) {
				//Do catmull interpolation, so more curves, smoother
				for (var i = 0; i <= 1; i += x) {
			        var px = this.math.catmullRomInterpolation(this.points3[j].x, i);
			        var py = this.math.catmullRomInterpolation(this.points3[j].y, i);

			        this.path3.push({x: px, y: py});
			    }
			} else {
				//Do linear interpolation, straight from one point to the next
				for (var i = 0; i <= 1; i += x) {
					var px = this.math.linearInterpolation(this.points3[j].x, i);
					var py = this.math.linearInterpolation(this.points3[j].y, i);

					this.path3.push({x: px, y: py});
				}
			}
		    game.paths3.push(this.path3);
		}
	}
}
