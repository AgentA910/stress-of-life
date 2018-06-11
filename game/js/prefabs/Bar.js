function Bar(game, x, y, key){
	//Create the bar, set initial frame
	Phaser.Sprite.call(this, game, x, y, key);
	this.frame = 0;
}

Bar.prototype = Object.create(Phaser.Sprite.prototype);
Bar.prototype.constructor = Bar;
