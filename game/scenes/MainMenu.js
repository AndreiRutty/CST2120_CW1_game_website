class MainMenu extends Phaser.Scene {
  constructor() {
    super("main-menu");
  }

  create() {
    this.add.text(600, 300, "Game Under Maintenance....");
  }
}
