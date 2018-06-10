var Finish = function(game) {};
Finish.prototype = {
	preload: function() {
		console.log("Finish: preload");
	},
	create: function() {
		console.log("Finish: create");
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		let style = {
        	wordWrap: true,
        	wordWrapWidth: 600
		}
		this.add.text(10, 50,  "They say a little stress can lead to productivity, but too much stress can only damage your health.", style);
		this.add.text(10, 200, "You have taken on too much stress.", style);
		this.add.text(10, 400, "Press ENTER to return to the main menu.", style);
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.ENTER)) {
			game.state.start('Menu');
		}
	}
}
