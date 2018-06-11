var Credits = function(game) {};
Credits.prototype = {
	preload: function() {
		console.log("Credits: preload");
	},
	create: function() {
		console.log("Credits: create");
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		let style = {
			font: "16px",
			fill: "#000",
        	align: "left",
        	boundsAlignH: "left",
        	boundsAlignV: "top",
        	wordWrap: true,
        	wordWrapWidth: 600
		}
		game.add.text(250, 0,   "CREDITS");
		game.add.text(10,  50,  "SOUNDS:");
		game.add.text(10,  100, "Very Noisy Kids in Classroom by Freesound.org Caculo", style);
		game.add.text(10,  125, "Ambience Busy Office Call Center by Freesound.org user dnlburnett", style);
		game.add.text(10,  150, "Remembered by Freesound.org user moz5a", style);
		game.add.text(10,  175, "Slap by Freesound.org user mccormick-ian", style);
		game.add.text(10,  225, "BACKGROUND:");
		game.add.text(10,  275, "Abstract Money by motionbackgroundsforfree.com user mallory", style);
		game.add.text(10,  375, "Andrew Purcell: Bullet system, level design, programming", style);
		game.add.text(10,  400, "Chengyu Jiang: Menu, backgrounds", style);
		game.add.text(10,  425, "Nick Olds: Sprites, player code", style);
		game.add.text(50,  550, "Press ENTER to go back to Menu");
	},
	update: function(){
		if (justPressed(Phaser.Keyboard.ENTER)) {
			game.state.start('Menu');
		}
	}
}
