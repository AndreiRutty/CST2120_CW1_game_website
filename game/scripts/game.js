var config = {
  type: Phaser.AUTO,
  width: 1400,
  height: 620,
  parent: 'game-container',
  backgroundColor: 0x000000,
  scene: [MainMenu],
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
