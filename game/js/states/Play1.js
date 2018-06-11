var player;
var bullet;
var bulletCount;
var bar;

//Level 1
//As a note: All comments here apply for the other states: Play2 and Play3 as well, as
//Mostly similar in code structure outside of a few details
var Play1 = function(game) {};
Play1.prototype = {
	preload: function() {
		console.log("Play1: preload");
	},
	create: function() {
		console.log("Play1: create");

		game.paused = true;

		this.background = this.game.add.image(0, 0, 'background1');

		//Groups to keep UI on top
		gameArea = game.add.group();
		UI       = game.add.group();

		game.bg = game.add.audio('bg1');
		game.bg.play('', 0, 0.5, true);

		//Add health bar in top right
		bar = new Bar(game, 0, 0, 'bar');
		UI.add(bar);

		//Add player
		player = new Player(game, 'player');
		gameArea.add(player);

		//Load instructions, label for level 1
		level1Text = game.add.text(280, 400, 'Level 1', { fontSize: '50px', fill: '#ffffff' });
		level1Text.anchor.set(0.5);
		var style = { font: 'bold 20pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 500 }
		instructionText = game.add.text(50, 200, 'Arrow Keys to move. Watch your stress meter and dodge the projectiles. Press ENTER to start', style);
		ENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
		ENTER.onDown.add(this.unpause, self);

		//Timer to make it so that bullets spawn every two sedonds
		timer1 = game.time.create(false);
		this.makeThirty();
		timer1.repeat(2000, 29, this.makeThirty, this);
		timer1.start();

		finishTimer = game.time.create(false);
		//One minute
		finishTimer.add(60000, this.nextLevel, this);
		finishTimer.start();
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			//To quickly leave the, go to Finish state
			this.finishGame();
		}
	},
	makeThirty: function() {
		//Spawn 30 bullets
		for (var i = 0; i < 30; i++) {
			this.makeBullet();
		}
	},
	makeBullet: function() {
		//Spawns one bullet on a random path
		route = game.rnd.integerInRange(0,game.paths.length-1);
		if (Math.random() >= 0.5) {
			bullet = new Bullet(game, 'gradeF', game.paths[route]);
		} else {
			bullet = new Bullet(game, 'paper', game.paths[route]);
		}
		gameArea.add(bullet);
	},
	finishGame: function() {
		//Go to the end of the game
		game.bg.stop();
		timer1.stop();
		//finishTimer.stop();
		game.state.start('Finish');
	},
	unpause: function() {
		//Unpauses the game
		level1Text.destroy();
		instructionText.destroy();
		game.paused = false;
	},
	nextLevel: function() {
		//Go to the next level
		game.bg.stop();
		timer1.stop();
		game.state.start('Play2');
	}
}
