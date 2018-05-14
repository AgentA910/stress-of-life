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

		bulletCount = 0;
		bulletAddTimer = game.time.create(false);
		bulletAddTimer.loop(1000, this.makeBullet, this);
		bulletAddTimer.start();

		game.bg = game.add.audio('bg');
		game.bg.play('', 0, 1, true);

		//finishTimer = game.time.create(false);
		//finishTimer.loop(20000, this.finishGame, this);
		//finishTimer.start();
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			this.finishGame();
		}
	},
	makeBullet: function() {
		bullet = new Bullet(game, 'bullet', game.paths[bulletCount]);
		this.add.existing(bullet);
		bulletCount++;
		if (bulletCount >= 5) {
			bulletAddTimer.stop();
		}
	},
	finishGame: function() {
		game.bg.stop();
		//finishTimer.stop();
		game.state.start('Finish');
	}
}
