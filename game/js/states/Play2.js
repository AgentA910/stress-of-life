//Level 2
var Play2 = function(game) {};
Play2.prototype = {
	preload: function() {
		console.log("Play2: preload");
	},
	create: function() {
		console.log("Play2: create");

		game.paused = true;

		this.background = this.game.add.image(0, 0, 'background2');

		//Groups to keep UI on top
		gameArea = game.add.group();
		UI       = game.add.group();

		game.bg = game.add.audio('bg2');
		game.bg.play('', 0, 0.5, true);

		//Add health bar
		bar = new Bar(game, 0, 0, 'bar');
		UI.add(bar);

		//Add player
		player = new Player(game, 'player');
		this.add.existing(player);

		//Add Level 2 intro
		level2Text = game.add.text(280, 400, 'Level 2', { fontSize: '50px', fill: '#ffffff' });
		level2Text.anchor.set(0.5);
		var style = { font: 'bold 20pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 500 }
		startText = game.add.text(50, 200, 'Press ENTER to start', style);
		ENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
		ENTER.onDown.add(this.unpause, self);

		//Make twenty bullets every 2.5 seconds
		timer1 = game.time.create(false);
		this.makeThirty();
		timer1.repeat(2500, 29, this.makeThirty, this);
		timer1.start();

		//After time is up, go to the next level
		finishTimer = game.time.create(false);
		//One minute
		finishTimer.add(60000, this.nextLevel, this);
		finishTimer.start();
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			//To quickly leave the level
			this.finishGame();
		}
	},
	makeThirty: function() {
		//Spawn Thirty bullets
		for (var i = 0; i < 30; i++) {
			this.makeBullet();
		}
	},
	makeBullet: function() {
		//Make one bullet of one of two images
		route = game.rnd.integerInRange(0,game.paths2.length-1);
		if (Math.random() >= 0.5) {
			bullet = new Bullet(game, 'anger', game.paths2[route]);
		} else {
			bullet = new Bullet(game, 'debt', game.paths2[route]);
		}
		gameArea.add(bullet);
	},
	finishGame: function() {
		game.bg.stop();
		//finishTimer.stop();
		timer1.stop();
		game.state.start('Finish');
	},
	unpause: function() {
		level2Text.destroy();
		startText.destroy();
		game.paused = false;
	},
	nextLevel: function() {
		//Go to level 3
		game.bg.stop();
		timer1.stop();
		game.state.start('Play3');
	}
}
