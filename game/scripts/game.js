// Game Configuration
var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
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
