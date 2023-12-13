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
    this.playButton = this.add
      .sprite(640, 500, "playButton")
      .setScale(0.5)
      .setInteractive({ useHandCursor: true });

    // Assign load Level function to Play Button
    this.playButton.on("pointerdown", () => this.loadLevel());
  }

  // Function to load the Level One Scene
  loadLevel = () => {
    // Checking if a user is log in before playing the game
    var isLogIn = false;

    // Iterating through local storage
    for (var i = 0; i < localStorage.length; i++) {
      // Getting the keys
      var userKey = localStorage.key(i);

      if (userKey != "debug" && userKey != "loglevel") {
        // Converting from JSON to objects
        var user = JSON.parse(localStorage.getItem(userKey));

        // Checking if a user is already log in before playing the game
        if (user.isLogIn) {
          isLogIn = true;
          break;
        }
      }
    }

    if (isLogIn) {
      this.scene.start("level-three");
    } else {
      alert("Please Log In or Sign Up to play the game");
    }
  };
}

export default MainMenu;
