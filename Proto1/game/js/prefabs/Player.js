function Player(game, key, frame) {

	Phaser.Sprite.call(this, game, 200, 200, key, frame);
	this.animations.add('move', [0, 1, 2, 1], 5, true);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.collideWorldBounds = true;
	this.body.allowGravity = false;
	
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
	this.body.velocity.x = 0;
	this.body.velocity.y =0;

	if(game.input.keyboard.isDown(Phaser.Keyboard.A))
	{
		this.body.velocity.x = -400/(hit/.5);
		this.animations.play('move');
	}
	else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
	{
		this.body.velocity.x = 400/(hit/.5);
		this.animations.play('move');
	}
	else
	{
		this.body.velocity.x = 0;
		this.animations.stop();
		this.frame = 1;
	}
	if (game.input.keyboard.isDown(Phaser.Keyboard.W))
	{
		this.body.velocity.y = -400/(hit/.5);
		this.animations.play('move');
	}
	else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
	{
		this.body.velocity.y =0;
		this.body.velocity.y = 400/(hit/.5);
		this.animations.play('move');
	}
	else
	{
		this.animations.stop();
		this.frame = 1;
	}
	
	game.physics.arcade.overlap(player, bullet, getHit, null, this);
	
	//if play gets hit four times, the gamestate goes to game over
	if(hit == 5){
		game.state.start('End');
	}
}

function getHit (player, bullet){
	bullet.kill();
	hit += 1;
}