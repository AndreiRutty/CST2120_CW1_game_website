class MainMenu extends Phaser.Scene {
  constructor() {
    super("main-menu");
  }

  preload() {
    console.log("Main Menu Scene Loaded");
    this.load.image("gameTitle", "../assets/Game-Title.png");
    this.load.image("playButton", "../assets/Play-Button.png");
  }

  create() {
    this.gameTileImage = this.add.sprite(640, 170, "gameTitle").setScale(1.1);
    this.playButtonImage = this.add.sprite(640, 500, "playButton").setScale(0.5);
  }
}

