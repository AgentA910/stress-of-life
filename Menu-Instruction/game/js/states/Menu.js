var menuSelect = false;
var playReady = false;
var creditReady = false;

var Menu = function(game) {};
Menu.prototype = {
	preload: function() {
		console.log("Menu: preload");
	},
	create: function() {
		console.log("Menu: create");
		activeFill = "#333";
    	inactiveFill = "#CCC";
		this.stage.backgroundColor = '#aabbcc';
		textStyle = {
			font: 'Black Ops One',
			fontSize: 76,
			fill: '#ffffff'
		};
		titleText = game.add.text(20, 200, 'Stress of Life', textStyle)
		startText = game.add.text(game.world.centerX, 400, "Press F to start the game");
		startText.anchor.set(0.5);
		var tween = game.add.tween(startText).to({ width: 300, height: 30 }, 1500, 'Linear', true, 0, -1, true);
	},
	update: function() {
		if (justPressed(Phaser.Keyboard.F)) {
			startText.kill();
			gameText = game.add.text(game.world.centerX, 400, "New Game", {fill:inactiveFill});
			creditText = game.add.text(game.world.centerX, 450, "Credits",{fill:inactiveFill});
			gameText.anchor.set(0.5);
			creditText.anchor.set(0.5);
			menuSelect = true;
		}
			if(justPressed(Phaser.Keyboard.DOWN)) {
			creditSelect();
			}
			else if (justPressed(Phaser.Keyboard.UP)) {
			playSelect();
			}

		if (playReady == true && justPressed(Phaser.Keyboard.ENTER)) {
				game.state.start ('Play1');
		}		
		else if (creditReady == true && justPressed(Phaser.Keyboard.ENTER)){
				game.state.start ('Credits');
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

function playSelect() {
    gameText.fill = activeFill;
    creditText.fill = inactiveFill;
    playReady = true;
    creditReady = false;
    console.log(playReady);
}
    
function creditSelect() {
    gameText.fill = inactiveFill;
    creditText.fill = activeFill;
    creditReady = true;
    playReady = false;
    console.log(playReady);
}