var player;
var bullet;
var bulletCount;
var lives;
var livesText;

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		console.log("Play: preload");
	},
	create: function() {
		console.log("Play: create");

		lives = 4;
		livesText = this.add.text(16, 16, "Lives: 4");
		player = new Player(game, 'player');
		this.add.existing(player);

		pattern = 0;
		timer1 = game.time.create(false);
		timer1.repeat(10, 1, this.bulletPatterns, this);
		timer1.start();

		game.bg = game.add.audio('bg');
		game.bg.play('', 0, 1, true);

		finishTimer = game.time.create(false);
		finishTimer.loop(20000, this.finishGame, this);
		finishTimer.start();
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			this.finishGame();
		}
	},
	makeBullet: function() {
		route = game.rnd.integerInRange(0,7);
		bullet = new Bullet(game, 'bullet', game.paths[route]);
		this.add.existing(bullet);
	},
	finishGame: function() {
		game.bg.stop();
		//finishTimer.stop();
		game.state.start('Finish');
	},
	bulletPatterns: function() {
		timer2 = game.time.create(false);
		timer2.repeat(1000, 5, this.makeBullet, this)
		timer2.start();
	}
}
