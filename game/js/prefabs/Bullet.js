function Bullet(game, key, path) {
	
	this.currentPath = null;
	this.pi = 0;

	//Make the bullet at an off-screen location
	Phaser.Sprite.call(this, game, -10, -10, key);
	
	game.physics.enable(this);
	this.anchor.set(0.5);

	//Set the path for the bullet
	this.path = path;
}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	//Move the player down the path
	this.x = this.path[this.pi].x;
	this.y = this.path[this.pi].y;
	this.pi++;

	if (this.pi >= this.path.length-1) {
		//If the bullet has moved down the entire path
		this.destroy();
	}
	if (game.physics.arcade.overlap(this, player)) {
		//If the bullet hits the player
		this.destroy();
		player.hit++;
		console.log("Life lost. Current lives: " + (5-player.hit));
		bar.frame++;
		game.slap.play('', 0, 1, false);
	}
}