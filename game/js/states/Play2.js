var Play2 = function(game) {};
Play2.prototype = {
	preload: function() {
		console.log("Play2: preload");
	},
	create: function() {
		console.log("Play2: create");

		game.paused = true;

		this.background = this.game.add.image(0, 0, 'background2');

		game.bg = game.add.audio('bg2');
		game.bg.play('', 0, 0.5, true);

		bar = new Bar(game, 0, 0, 'bar');
		this.add.existing(bar);

		player = new Player(game, 'player');
		this.add.existing(player);

		level2Text = game.add.text(280, 400, 'Level 1', { fontSize: '50px', fill: '#ffffff' });
		level2Text.anchor.set(0.5);
		var style = { font: 'bold 20pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 500 }
		startText = game.add.text(50, 200, 'Press ENTER to start', style);
		ENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
		ENTER.onDown.add(this.unpause, self);

		timer1 = game.time.create(false);
		this.makeTwenty();
		timer1.repeat(2000, 29, this.makeTwenty, this);
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
	makeTwenty: function() {
		for (var i = 0; i < 20; i++) {
			this.makeBullet();
		}
	},
	makeBullet: function() {
		route = game.rnd.integerInRange(0,game.paths2.length-1);
		if (Math.random() >= 0.5) {
			bullet = new Bullet(game, 'anger', game.paths2[route]);
		} else {
			bullet = new Bullet(game, 'debt', game.paths2[route]);
		}
		this.add.existing(bullet);
	},
	finishGame: function() {
		game.bg.stop();
		//finishTimer.stop();
		game.state.start('Finish');
	},
	unpause: function() {
		level2Text.destroy();
		startText.destroy();
		game.paused = false;
	}
}
