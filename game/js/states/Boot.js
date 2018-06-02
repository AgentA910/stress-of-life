var Boot = function(game) {};
Boot.prototype = {
	preload: function() {
		console.log("Boot: preload");
		game.load.image('backgroundMenu', 'assets/img/background/background_menu.png');
	},
	create: function() {
		game.state.start('Menu');
	}
}