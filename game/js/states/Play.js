var player;
var bullet;

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		console.log("Play: preload");
	},
	create: function() {
		console.log("Play: create");
		player = new Player(game, 'player', 400, 400);
		this.add.existing(player);
	},
	update: function() {
		
	},
	makeBullet: function() {
		bullet = Bullet(game, 'bullet');
	}
}
