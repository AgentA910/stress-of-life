//Stress of Life main file. Functions to be replaced as need be.

var game;
window.onload = function() {
	game = new Phaser.Game(800, 800, Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Play', Play);
	game.state.add('Menu', Menu);
	game.state.add('Finish', Finish);
	game.state.start('Menu');
}
