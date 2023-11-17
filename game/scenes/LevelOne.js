class LevelOne extends Phaser.Scene {
  constructor() {
    super("level-one");
  }

  preload() {
    console.log("Level One Scene Loaded");
  }

  create(data) {
    this.add.text(640, 360, "Level One");
  }
}
