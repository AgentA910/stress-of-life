//Stress of Life main file. Functions to be replaced as need be.

var game;
var spawnOk = true;
var bullet;
var player;
var levelText;
var level2Text;
var hit = 1;

window.onload = function() {
	game = new Phaser.Game(400, 600, Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Menu', Menu);
	game.state.add('Level1', Level1);
	game.state.add('Level2', Level2);
	game.state.add('End', End);
	game.state.start('Load');
}

var Load = function(game){};
Load.prototype = {
	preload: function(){
		game.load.path = '../Game/assets/img/';
		game.load.spritesheet('player', 'player.png', 32, 32, 3);
		game.load.image('background', 'background.png');
		game.load.image('playButton', 'playbutton.png');
		game.load.image('bullet', 'bullet.png');
		game.load.path = '../Game/assets/audio/'
		game.load.audio('bgm', 'bgm.mp3');
	},
//load assets
	create: function(){
		game.state.start('Menu');
	}
// start Play state
};
var Menu = function Menu(game){};
Menu.prototype = {
	create: function(){
		var nameLabel = game.add.text(25, 80, 'PlaceHolder Menu \n need art assets', {font: '40px Arial', fill: '#ffffff'});
		var startLabel = game.add.text (80, game.world.height-80, 'Click the button to Start', {font: '25px Arial', fill: '#ffffff'});
		// adding title text and instruction text to the 'Main Menu' state
		var playButton = game.add.button(200, game.height - 300, 'playButton', this.startGame);
		playButton.anchor.set(0.5);
		var tween = game.add.tween(playButton).to({ width: 220, height: 220 }, 1500, 'Linear', true, 0, -1, true);
		// animated Play Button taken from lecture slides
	},
	startGame: function(){
		game.state.start('Level1');
	}
};

var Level1 = function Level1(game){};
Level1.prototype = {
	create: function(){
		this.bgm = game.add.audio('bgm');
		this.bgm.play();
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0, 0, 'background');
		level1Text = game.add.text(game.world.centerX, game.world.centerY, 'Level 1', { fontSize: '50px', fill: '#ffffff' });

		player = new Player(game, 'player', 2);
		game.add.existing(player);

		game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.addBullet, this);
		game.time.events.add(Phaser.Timer.SECOND * 12, this.goNext, this);
		game.time.events.add(Phaser.Timer.SECOND * 1.5, this.fadeText1, this);

	},

	update: function() {

	},

	addBullet: function(){
		bullet = new Bullet(game, 'bullet');
		game.add.existing(bullet);
	},

	fadeText1: function(){
		level1Text.destroy();
	},

	goNext: function(){
		game.state.start('Level2');
	}
};

var Level2 = function Level2(game){};
Level2.prototype = {
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0, 0, 'background');
		level2Text = game.add.text(game.world.centerX, game.world.centerY, 'Level 2', { fontSize: '50px', fill: '#ffffff' })

		player = new Player(game, 'player', 2);
		game.add.existing(player);
		player.hit = 1;

		game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.addBullet, this);
		game.time.events.add(Phaser.Timer.SECOND * 1.5, this.fadeText2, this);
		game.time.events.add(Phaser.Timer.SECOND * 12, this.goNext, this);

	},

	update: function() {

	},

	addBullet: function(){
			bullet = new Bullet(game, 'bullet');
			game.add.existing(bullet);
		},

	fadeText2: function(){
		level2Text.destroy();
	},

	goNext: function(){
		game.state.start('End');
	}
};


var End = function End(game){};
End.prototype = {
	preload: function() {

	},
	create: function() {
		var nameLabel = game.add.text(game.world.centerX - 100, game.world.centerY, 'The End', {font: '50px Arial', fill: '#ffffff'});
		// 'game end' text
	},
		// Main Menu prompt
	update: function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Menu');
		// returning to 'Main Menu' when spacebar is pressed
		}
	}
}