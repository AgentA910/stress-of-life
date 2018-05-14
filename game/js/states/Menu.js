var Menu = function(game) {};
Menu.prototype = {
	preload: function() {
		console.log("Menu: preload");
	},
	create: function() {
		console.log("Menu: create");
		this.add.text(32, 32, "Press F to start the game");
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			game.state.start('Load');
		}
	}
}

//Returns true once per keypress
function justPressed(key) {
	if (game.input.keyboard.downDuration(key, 1)) {
		return true;
	}
	return false;
}