function Player(game, key, x, y) {

	Phaser.Sprite.call(this, game, x, y, key);
	
	game.physics.enable(this);
	this.body.collideWorldBounds = true;
	
	//plays animation
	this.animations.add('move', [0, 1, 2, 1], 5, true);
	this.animations.play('move');

	this.hit = 1;
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
	if (Phaser.Keyboard.LEFT.isDown)
	{
		player.body.velocity.x = -400/(this.hit/.5);
	}
	else if (Phaser.Keyboard.RIGHT.isDown)
	{
		player.body.velocity.x = 400/(this.hit/.5);
	}
	else
	{
		player.body.velocity.x = 400/(this.hit/.5);
	}
	if (Phaser.Keyboard.UP.isDown)
	{
		player.body.velocity.y = 400/(this.hit/.5);
	}
	else if (Phaser.Keyboard.DOWN.isDown)
	{
		player.body.velocity.y = 400/(this.hit/.5);
	}
	else
	{
		player.body.velocity.y = 0;
	}
	
	//game.physics.arcade.overlap(player, bullets, getHit, null, this);
	
	//if play gets hit four times, the gamestate goes to game over
	if(this.hit == 5){
		game.state.start('Finish');
	}
}

function getHit (player, bullet){
	bullet.kill();
	player.hit += 1;
}
