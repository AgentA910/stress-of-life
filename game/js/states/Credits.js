var Credits = function(game) {};
Credits.prototype = {
	preload: function() {
		console.log("Credits: preload");
	},
	create: function(){
		console.log("Credits: create");
	this.stage.backgroundColor = '#aabbcc';
		creditText = game.add.text(250, 0,"CREDITS");
		backText = game.add.text(50, 550, "Press ENTER to go back to Menu");
		Stage1 = game.add.text(0,100, "Very Noisy Kids in Classroom by Caculo");
		Stage2 = game.add.text(0,150, "Ambience Busy Office Call Center by dnlburnett");
		Stage3 = game.add.text(0,200, "Remembered by Modestus Mankus");
		Hit = game.add.text(0, 250, "Slap by mccormick-ian");
		background2 = game.add.text(0,350, "Abstract Money by mallory");
		music = game.add.text(0,50, "MUSIC:");
		background = game.add.text(0,300, "BACKGROUND:");
		Andrew = game.add.text(0,400, "bullet path and level design by Andrew Purcell");
		Chengyu = game.add.text(0,450, "menu and other background by Chengyu Jiang");
		Nick = game.add.text(0,500, "sprites and player code by Nick Olds");
	},
	update: function(){
		if (justPressed(Phaser.Keyboard.ENTER)) {
			game.state.start('Menu');
		}
	}
}
