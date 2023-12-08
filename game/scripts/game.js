import LevelOne from "../../game/scenes/LevelOne.js";
import LevelTwo from "../../game/scenes/LevelTwo.js";
import MainMenu from "../../game/scenes/MainMenu.js";
import GameOver from "../../game/scenes/GameOver.js";
import Victory from "../../game/scenes/Victory.js";


// Game Configuration
var config = {
  type: Phaser.AUTO,
  width: 1300,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  parent: "game-container",
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MainMenu, LevelOne, GameOver, Victory, LevelTwo],
};

window.onload = () => {
  const game = new Phaser.Game(config);
};
