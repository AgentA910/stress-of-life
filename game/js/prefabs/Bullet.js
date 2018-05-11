function Bullet(game, key) {

	//Need to replace coordinates with first part of path, will use the waveforms project for help
	Phaser.Sprite.call(this, game, 50, 50, key);
	
	game.physics.enable(this);
}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	
}
