var config = {
  type: Phaser.AUTO,
  width: 1500,
  height: 610,
  parent: 'game-container',
  backgroundColor: 0x000000,
  scene: [MainMenu],
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
