function Player(game, key) {

	Phaser.Sprite.call(this, game, 200, 200, key);
	
	game.physics.enable(this);
	this.body.collideWorldBounds = true;
	
	//plays animation
	this.animations.add('move', [0, 1, 2, 1], 5, true);
	this.animations.play('move');
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
	if (cursors.left.isDown)
	{
		player.body.velocity.x = -400/(hit/.5);
	}
	else if (cursors.right.isDown)
	{
		player.body.velocity.x = 400/(hit/.5);
	}
	else
	{
		player.body.velocity.x = 400/(hit/.5);
	}
	if (cursors.up.isDown)
	{
		player.body.velocity.y = 400/(hit/.5);
	}
	else if (cursors.down.isDown)
	{
		player.body.velocity.y = 400/(hit/.5);
	}
	else
	{
		player.body.velocity.y = 0;
	}
	
	game.physics.arcade.overlap(player, bullets, getHit, null, this);
	
	//if play gets hit four times, the gamestate goes to game over
	if(hit == 5){
		game.state.start('GameOver');
	}
}

function getHit (player, bullet){
	bullet.kill();
	hit += 1;
}
