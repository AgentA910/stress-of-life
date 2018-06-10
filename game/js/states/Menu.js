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
		//active for current selection on menu, inactive for all others
		activeFill = "#333";
    	inactiveFill = "#CCC";
		this.background = this.game.add.image(0, 0, 'backgroundMenu');
		textStyle = {
			font: 'Black Ops One',
			fontSize: 76,
			fill: '#ffffff'
		};
		titleText = game.add.text(20, 170, 'Stress of Life', textStyle)
		startText = game.add.text(game.world.centerX, 400, "Press ENTER to start the game");
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

			//For use in debugging/easter egg, skip to any state
			if (justPressed(Phaser.Keyboard.NUMPAD_1)) {
				toLoad = 1;
				console.log("Load Play1");
			}
			if (justPressed(Phaser.Keyboard.NUMPAD_2)) {
				toLoad = 2;
				console.log("Load Play2");
			}
			if (justPressed(Phaser.Keyboard.NUMPAD_3)) {
				toLoad = 3;
				console.log("Load Play3");
			}
			if (justPressed(Phaser.Keyboard.NUMPAD_4)) {
				toLoad = 4;
				console.log("Load Win");
			}
			if (justPressed(Phaser.Keyboard.NUMPAD_5)) {
				toLoad = 5;
				console.log("Load Finish");
			}
		} else {
			if (justPressed(Phaser.Keyboard.ENTER)) {
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
		//Move selected option on menu down
		this.selection++;
		if (this.selection > numSelections) {
			this.selection = 1;
		}
		this.setSelection();
	},
	selectUp: function() {
		//Move selected option on menu up
		this.selection--;
		if (this.selection <= 0) {
			this.selection = numSelections;
		}
		this.setSelection();
	},
	setSelection: function() {
		//Make it so that selection is shown
		if (this.selection == 1) {
			//Set option to Play
			gameText.fill = activeFill;
			creditText.fill = inactiveFill;
		} else if (this.selection == 2) {
			creditText.fill = activeFill;
			gameText.fill = inactiveFill;
		}
	},
	menuPress: function() {
		//Press current selection on the menu
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
