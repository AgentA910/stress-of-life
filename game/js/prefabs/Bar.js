function Bar(game, x, y, key){
	Phaser.Sprite.call(this, game, x, y, key);
	this.frame = 0;
}

Bar.prototype = Object.create(Phaser.Sprite.prototype);
Bar.prototype.constructor = Bar;
