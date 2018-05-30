var player;
var bullet;
var bulletCount;
var bar;
var ENTER;

var Play1 = function(game) {};
Play1.prototype = {
	preload: function() {
		console.log("Play: preload");
	},
	create: function() {
		console.log("Play: create");
		debug = false

		game.paused = true;

		game.bg = game.add.audio('bg');
		game.bg.play('', 0, 0.5, true);

		this.background = this.game.add.image(0, 0, 'background1');

		bar = new Bar(game, 0, 0, 'bar');
		this.add.existing(bar);

		player = new Player(game, 'player');
		this.add.existing(player);

		level1Text = game.add.text(280, 400, 'Level 1', { fontSize: '50px', fill: '#ffffff' });
		level1Text.anchor.set(0.5);
		var style = { font: 'bold 20pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 500 }
		instructionText = game.add.text(50, 200, 'Arrow Keys to move. Watch your stress meter and dodge the projectiles. Press ENTER to start', style);
		ENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
		ENTER.onDown.add(this.unpause, self);

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
	},
	unpause: function(){
		level1Text.destroy();
		instructionText.destroy();
		game.paused = false;
	}
}
