var Finish = function(game) {};
Finish.prototype = {
	preload: function() {
		console.log("Finish: preload");
	},
	create: function() {
		console.log("Finish: create");
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		this.add.text(16, 16, "Game finished\nPress F to play again");
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			game.state.start('Menu');
		}
	}
}
