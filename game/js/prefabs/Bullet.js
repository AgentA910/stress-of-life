function Bullet(game, key) {

	/*this.bmd = null;
	this.path = [];
	this.currentPath = null;
	this.points = {
		'x': [-20, 60, 160, 240, 320, 400, 480, 560, 643],
		'y': [408, 68, 408,  68, 408,  68, 408,  68, 408]
	}
	this.pi = 0;*/

	//Need to replace coordinates with first part of path, will use the waveforms project for help
	Phaser.Sprite.call(this, game, 0, 400, key);
	
	game.physics.enable(this);
	this.anchor.set(0.5);

	
	//Code adapted from Phaser Sprite Motion Paths tutorial
	//Still haven't finished working it out, so for now bullets just move across the screen
	/*this.bmd.clear();

	var x = 1 / game.width;

	for (var i = 0; i <= 1; i += x) {
        var px = this.math.catmullRomInterpolation(this.points.x, i);
        var py = this.math.catmullRomInterpolation(this.points.y, i);

        this.path.push({x: px, y: py})
    }

    for (var p = 0; p < this.points.x.length; p++) {
        this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
    }*/
}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	/*this.x = this.path[this.pi].x;
	this.y = this.path[this.pi].x;

	this.pi++;

	if (this.pi >= this.path.length) {
		this.kill();
	}*/
	this.x += 2;
	if (this.x >= game.width) {
		this.kill();
	}
	if (game.physics.arcade.overlap(this, player)) {
		this.kill();
		player.hit++;
		lives--;
		livesText.text = 'Lives: ' + lives;
	}
}