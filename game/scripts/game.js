import LevelOne from "../../game/scenes/LevelOne.js";
import MainMenu from "../../game/scenes/MainMenu.js";


// Game Configuration
var config = {
  type: Phaser.AUTO,
  width: 1280,
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
  scene: [MainMenu, LevelOne],
};

window.onload = () => {
  const game = new Phaser.Game(config);
};
