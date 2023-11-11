class Scene1 extends Phaser.Scene {
  constructor() {
    super("main-menu");
  }

  create() {
    this.add.text(600, 300, "Game Under Maintenance....", {
      fill: "#b42b2b",
    });
  }
}
