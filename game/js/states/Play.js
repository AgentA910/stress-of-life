var player;
var bullet;
var bulletCount;
var lives;
var livesText;
var bar;

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		console.log("Play: preload");
	},
	create: function() {
		console.log("Play: create");
		debug = false

		game.bg = game.add.audio('bg');
		game.bg.play('', 0, 1, true);

		/*lives = 4;
		livesText = this.add.text(16, 16, "Lives: 4");*/
		bar = new Bar(game, 0, 0, 'bar');
		this.add.existing(bar);


		player = new Player(game, 'player');
		this.add.existing(player);

		timer1 = game.time.create(false);
		timer1.repeat(2000, 10, this.spawnTwenty, this);
		timer1.start();

		finishTimer = game.time.create(false);
		//Two minutes
		finishTimer.add(60000, this.finishGame, this);
		finishTimer.start();
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			//To quickly leave the level
			this.finishGame();
		}
	},
	spawnTwenty: function() {
		timer2 = game.time.create(false);
		timer2.repeat(10, 20, this.makeBullet, this);
		timer2.start();
	},
	makeBullet: function() {
		route = game.rnd.integerInRange(0,game.paths.length-1);
		bullet = new Bullet(game, 'bullet', game.paths[route]);
		this.add.existing(bullet);
	},
	finishGame: function() {
		game.bg.stop();
		//finishTimer.stop();
		game.state.start('Finish');
	}
}
