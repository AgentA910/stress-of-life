function Bullet(game, key) {

	this.bmd = null;
	this.path = [];
	this.currentPath = null;
	this.points = {
		'x': [-20, 60, 160, 240, 320, 400, 480, 560, 643],
		'y': [408, 68, 408,  68, 408,  68, 408,  68, 408]
	}
	this.pi = 0;

	//Need to replace coordinates with first part of path, will use the waveforms project for help
	Phaser.Sprite.call(this, game, points.x[0], points.y[0], key);
	
	game.physics.enable(this);

	//Code adapted from Phaser Sprite Motion Paths tutorial
	this.bmd.clear();

	var x = 1 / game.width;

	for (var i = 0; i <= 1; i += x) {
        var px = this.math.catmullRomInterpolation(this.points.x, i);
        var py = this.math.catmullRomInterpolation(this.points.y, i);

        this.path.push({x: px, y: py})
    }

    for (var p = 0; p < this.points.x.length; p++) {
        this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
    }
}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	this.x = this.path[this.pi].x;
	this.y = this.path[this.pi].x;

	this.pi++;

	if (this.pi >= this.path.length) {
		this.kill();
	}
}