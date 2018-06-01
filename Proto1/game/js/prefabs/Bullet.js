function Bullet(game, key) {

	//Need to replace coordinates with first part of path, will use the waveforms project for help
	Phaser.Sprite.call(this, game, game.world.randomX, 50, key);
	
	game.physics.enable(this, Phaser.Physics.ARCADE);

	game.physics.arcade.gravity.y = 400; // placeholder for bullet movement;
}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	
}