var config = {
  type: Phaser.AUTO,
  width: 1500,
  height: 600,
  parent: 'game-container',
  backgroundColor: 0x000000,
  scene: [Scene1],
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
