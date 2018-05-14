function Player(game, key, x, y) {

	Phaser.Sprite.call(this, game, x, y, key);
	
	game.physics.enable(this);
	this.body.collideWorldBounds = true;
	this.anchor.set(0.5);
	//plays animation
	this.animations.add('move', [0, 1, 2, 1], 5, true);
	this.animations.play('move');

	this.hit = 1;
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
	{
		this.body.velocity.x = -400/(this.hit/0.75);
	}
	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
	{
		this.body.velocity.x = 400/(this.hit/0.75);
	}
	if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
	{
		this.body.velocity.y = -400/(this.hit/0.75);
	}
	else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
	{
		this.body.velocity.y = 400/(this.hit/0.75);
	}
	
	//game.physics.arcade.overlap(player, bullets, getHit, null, this);
	
	//if play gets hit four times, the gamestate goes to game over
	if(this.hit >= 5){
		game.bg.stop();
		game.state.start('Finish');
	}
}
