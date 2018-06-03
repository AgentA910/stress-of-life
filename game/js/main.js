//Stress of Life main file. Functions to be replaced as need be.

var game;
window.onload = function() {
	game = new Phaser.Game(600, 600, Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Play1', Play1);
	game.state.add('Menu', Menu);
	game.state.add('Finish', Finish);
	game.state.add('Credits', Credits);
	game.state.add('Boot', Boot);
	game.state.start('Boot');
}
