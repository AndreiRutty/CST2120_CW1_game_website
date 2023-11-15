class MainMenu extends Phaser.Scene {
  constructor() {
    super("main-menu");
  }

  preload() {
    console.log("Main Menu Scene Loaded");
  }

  create() {
    this.add.text(550, 300, "Game Under Maintenance....");
  }
}

