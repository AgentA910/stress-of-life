var playReady = false;
var creditReady = false;
var numSelections = 2;
var toLoad;

var Menu = function(game) {};
Menu.prototype = {
	preload: function() {
		console.log("Menu: preload");
	},
	create: function() {
		console.log("Menu: create");
		activeFill = "#333";
    	inactiveFill = "#CCC";
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		textStyle = {
			font: 'Black Ops One',
			fontSize: 76,
			fill: '#ffffff'
		};
		titleText = game.add.text(20, 200, 'Stress of Life', textStyle)
		startText = game.add.text(game.world.centerX, 400, "Press F to start the game");
		startText.anchor.set(0.5);
		var tween = game.add.tween(startText).to({ width: 300, height: 30 }, 1500, 'Linear', true, 0, -1, true);
		this.menuUp = false;
	},
	update: function() {
		if (this.menuUp) {
			if(justPressed(Phaser.Keyboard.DOWN)) {
				this.selectDown();
			} else if (justPressed(Phaser.Keyboard.UP)) {
				this.selectUp();
			}

			if (justPressed(Phaser.Keyboard.ENTER)) {
					this.menuPress();
			}
			if (justPressed(Phaser.Keyboard.NUMPAD_1)) {
				toLoad = 1;
				console.log(toLoad);
			}
			if (justPressed(Phaser.Keyboard.NUMPAD_2)) {
				toLoad = 2;
				console.log(toLoad);
			}
			if (justPressed(Phaser.Keyboard.NUMPAD_3)) {
				toLoad = 3;
			}
		} else {
			if (justPressed(Phaser.Keyboard.F)) {
				startText.kill();
				gameText = game.add.text(game.world.centerX, 400, "New Game", {fill:inactiveFill});
				creditText = game.add.text(game.world.centerX, 450, "Credits",{fill:inactiveFill});
				gameText.anchor.set(0.5);
				creditText.anchor.set(0.5);
				this.menuUp = true;
				this.selection = 1;
				this.setSelection();
				toLoad = 1;
			}
		}
	},
	selectDown: function() {
		this.selection++;
		if (this.selection > numSelections) {
			this.selection = 1;
		}
		this.setSelection();
	},
	selectUp: function() {
		this.selection--;
		if (this.selection <= 0) {
			this.selection = numSelections;
		}
		this.setSelection();
	},
	setSelection: function() {
		if (this.selection == 1) {
			//Set option to Play
			gameText.fill = activeFill;
			creditText.fill = inactiveFill;
			console.log("Selection set to 1");
		} else if (this.selection == 2) {
			creditText.fill = activeFill;
			gameText.fill = inactiveFill;
			console.log("Selection set to 2");
		}
	},
	menuPress: function() {
		if (this.selection == 1) {
			game.state.start('Load');
		} else if (this.selection == 2) {
			game.state.start('Credits');
		}
	}
}
//Returns true once per keypress
function justPressed(key) {
	if (game.input.keyboard.downDuration(key, 1)) {
		return true;
	}
	return false;
}
