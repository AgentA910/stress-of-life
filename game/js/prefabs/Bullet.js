function Bullet(game, key, path) {
	
	this.currentPath = null;
	this.pi = 0;

	Phaser.Sprite.call(this, game, -10, -10, key);
	
	game.physics.enable(this);
	this.anchor.set(0.5);

	this.path = path;
}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	this.x = this.path[this.pi].x;
	this.y = this.path[this.pi].y;

	this.pi++;

	if (this.pi >= this.path.length-1) {
		this.destroy();
	}
	if (game.physics.arcade.overlap(this, player)) {
		this.destroy();
		player.hit++;
		lives--;
		livesText.text = 'Lives: ' + (5-player.hit);
		console.log("Life lost. Current lives: " + (5-player.hit));
	}
}