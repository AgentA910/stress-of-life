//Stress of Life main file. Functions to be replaced as need be.

var game = new Phaser.Game(800, 600, Phaser.AUTO);

var score;
var scoreText;

var menu = function(game) {};
menu.prototype = {
	preload: function() {
		console.log("menu: preload");
	},
	create: function() {
		console.log("menu: create");
	},
	update: function() {
		
	}
}

var play = function(game) {};
play.prototype = {
	preload: function() {
		console.log("play: preload");
	},
	create: function() {
		console.log("play: create");
	},
	update: function() {
		
	}
}

var finish = function(game) {};
finish.prototype = {
	preload: function() {
		console.log("finish: preload");
	},
	create: function() {
		console.log("finish: create");
	},
	update: function() {

	}
}

game.state.add('menu', menu);
game.state.add('play', play);
game.state.add('finish', finish);
game.state.start('menu')
