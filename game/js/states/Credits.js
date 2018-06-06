var Credits = function(game) {};
Credits.prototype = {
	preload: function() {
		console.log("Credits: preload");
	},
	create: function(){
		console.log("Credits: create");
	this.stage.backgroundColor = '#aabbcc';
		creditText = game.add.text(100, 50,"Credits goes here");
		backText = game.add.text(100, 500, "Press F to go back to Menu");
		Stage1 = game.add.text(0,100, "Very Noisy Kids in Classroom by Caculo");
		Stage2 = game.add.text(0,150, "Ambience Busy Office Call Center by dnlburnett");
		Stage3 = game.add.text(0,200, "Remembered by Modestus Mankus");
		Hit = game.add.text(0, 250, "Slap by mccormick-ian");
	},
	update: function(){
		if (justPressed(Phaser.Keyboard.F)) {
			game.state.start('Menu');
		}
	}
}
