class MainMenu extends Phaser.Scene {
  constructor() {
    super("main-menu");
  }

  preload() {
    console.log("Main Menu Scene Loaded");
    this.load.image("gameTitle", "../assets/Game-Title.png");
    this.load.image("playButton", "../assets/Play-Button.png");
  }

  create(data) {
    // Game Title
    this.gameTitle = this.add.sprite(640, 170, "gameTitle").setScale(1.1);

    // Play Button
    this.playButton = this.add.sprite(640, 500, "playButton").setScale(0.5).setInteractive({useHandCursor:true});

    // Assign load Level function to Play Button
    this.playButton.on('pointerdown', () => this.loadLevel())
  }

  // Function to load the Level One Scene
  loadLevel = () => {
    this.scene.start("level-one");
  }
}

