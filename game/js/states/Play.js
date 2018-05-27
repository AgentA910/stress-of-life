var player;
var bullet;
var bulletCount;
var bar;

var Play1 = function(game) {};
Play1.prototype = {
	preload: function() {
		console.log("Play: preload");
	},
	create: function() {
		console.log("Play: create");
		debug = false

		game.bg = game.add.audio('bg');
		game.bg.play('', 0, 1, true);

		bar = new Bar(game, 0, 0, 'bar');
		this.add.existing(bar);

		player = new Player(game, 'player');
		this.add.existing(player);

		timer1 = game.time.create(false);
		this.makeThirty();
		timer1.repeat(2000, 29, this.makeThirty, this);
		timer1.start();

		finishTimer = game.time.create(false);
		//One minute
		finishTimer.add(60000, this.finishGame, this);
		finishTimer.start();
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			//To quickly leave the level
			this.finishGame();
		}
	},
	makeThirty: function() {
		for (var i = 0; i < 30; i++) {
			this.makeBullet();
		}
	},
	makeBullet: function() {
		route = game.rnd.integerInRange(0,game.paths.length-1);
		if (Math.random() >= 0.5) {
			bullet = new Bullet(game, 'gradeF', game.paths[route]);
		} else {
			bullet = new Bullet(game, 'paper', game.paths[route]);
		}
		this.add.existing(bullet);
	},
	finishGame: function() {
		game.bg.stop();
		//finishTimer.stop();
		game.state.start('Finish');
	}
}
