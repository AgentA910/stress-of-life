var Credits = function(game) {};
Credits.prototype = {
	preload: function() {
		console.log("Credits: preload");
	},
	create: function(){
		console.log("Credits: create");
	this.stage.backgroundColor = '#aabbcc';
		creditText = game.add.text(game.world.centerX-95, 20,"Credits", {font:"50px Black Ops One"});		
		backText = game.add.text(95, 500, "Press F to go back to Menu", {font:"30px Black Ops One"});
		var style = {font: "27px Arial"};
		Stage1 = game.add.text(25,120, "Caculo - Very Noisy Kids in Classroom", style);
		Stage2 = game.add.text(25,190, "dnlburnett - Ambience Busy Office Call Center", style);
		Stage3 = game.add.text(25,260, "Modestus Mankus - Remembered", style);
		Hit = game.add.text(25, 330, "mccormick-ian - Slap", style);
	},
	update: function(){
		if (justPressed(Phaser.Keyboard.F)) {
			game.state.start('Menu');
		}
	}
}
