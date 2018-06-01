var Credits = function(game) {};
Credits.prototype = {
	preload: function() {
		console.log("Credits: preload");
	},
	create: function(){
		console.log("Credits: create");
		creditText = game.add.text(100, 100,"Credits goes here");
		backText = game.add.text(100, 500, "Press F to go back to Menu");
	},
	update: function(){
		if (justPressed(Phaser.Keyboard.F)) {
			game.state.start('Menu');
		}
	}
}
