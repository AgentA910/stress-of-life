var Win = function(game) {};
Win.prototype = {
	preload: function() {
		console.log("Win: preload");
	},
	create: function() {
		console.log("Win: create");
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		let style = {
        	wordWrap: true,
        	wordWrapWidth: 600
		}
		this.add.text(10, 50,  "Congratulations. You have managed to survive without overstressing yourself, and can continue on without exhausting yourself.", style);
		this.add.text(10, 400, "Press ENTER to return to the main menu.", style);
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.ENTER)) {
			game.state.start('Menu');
		}
	}
}
