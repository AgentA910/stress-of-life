function Player(game, key){

	Phaser.Sprite.call(this, game, 200, 200, key);
	
	game.physics.enable(this);
	this.body.collideWorldBounds = true;
	
	//play animation
	this.animations.add('move', [0, 1, 2, 1], 5, true);
	this.animations.play('move');
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){				
	if (cursors.left.isDown)
	{
		player.body.velocity.x = -150;
	}
	else if (cursors.right.isDown)
	{
		player.body.velocity.x = 150;
	}
	else
	{
		player.body.velocity.x = 0;
	}
	if (cursors.up.isDown)
	{
		player.body.velocity.y = -150;
	}
	else if (cursors.down.isDown)
	{
		player.body.velocity.y = 150;
	}
	else
	{
		player.body.velocity.y = 0;
	}
	
}
