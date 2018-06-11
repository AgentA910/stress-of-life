//Level 3
var Play3 = function(game) {};
Play3.prototype = {
	preload: function() {
		console.log("Play3: preload");
	},
	create: function() {
		console.log("Play3: create");

		game.paused = true;

		this.background = this.game.add.image(0, 0, 'background3');

		game.bg = game.add.audio('bg3');
		game.bg.play('', 0, 0.5, true);

		//Make health bar
		bar = new Bar(game, 0, 0, 'bar');
		this.add.existing(bar);

		//Make player
		player = new Player(game, 'player');
		this.add.existing(player);

		//Make level 3 intro text
		level3Text = game.add.text(280, 400, 'Level 3', { fontSize: '50px', fill: '#ffffff' });
		level3Text.anchor.set(0.5);
		var style = { font: 'bold 20pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 500 }
		startText = game.add.text(50, 200, 'Press ENTER to start', style);
		ENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
		ENTER.onDown.add(this.unpause, self);

		timer1 = game.time.create(false);
		this.makeTwenty();
		timer1.repeat(3000, 29, this.makeTwenty, this);
		timer1.start();

		finishTimer = game.time.create(false);
		//One minute
		finishTimer.add(60000, this.winGame, this);
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
		route = game.rnd.integerInRange(0,game.paths3.length-1);
		if (Math.random() >= 0.67) {
			bullet = new Bullet(game, 'skull', game.paths3[route]);
		} else if (Math.random() >= 0.33 && Math.random() < 0.67) {
			bullet = new Bullet(game, 'radiation', game.paths3[route]);
		} else {
			bullet = new Bullet(game, 'poison', game.paths3[route]);
		}
		this.add.existing(bullet);
	},
	finishGame: function() {
		game.bg.stop();
		//finishTimer.stop();
		game.state.start('Finish');
	},
	unpause: function() {
		level3Text.destroy();
		startText.destroy();
		game.paused = false;
	},
	winGame: function() {
		game.bg.stop();
		timer2.stop();
		game.state.start('Win');
	}
}
