var Boot = function(game) {};
Boot.prototype = {
	preload: function() {
		console.log("Boot: preload");
		game.load.image('backgroundMenu', 'assets/img/background/background_menu.png');
		game.load.image('loading', 'assets/img/stylesheet/loading.png');
	},
	create: function() {
		game.state.start('Menu');
	}
}