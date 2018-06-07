var Finish = function(game) {};
Finish.prototype = {
	preload: function() {
		console.log("Finish: preload");
	},
	create: function() {
		console.log("Finish: create");
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		this.add.text(0, 400, "Press ENTER to play again");
		this.add.text(0,50, "They say a little stress can lead to productivity,");
		this.add.text(0,100, "but too much stress can only damage your health.");
		this.add.text(0,200, "You have taken on too much stress.");
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.ENTER)) {
			game.state.start('Menu');
		}
	}
}
