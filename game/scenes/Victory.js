class Victory extends Phaser.Scene {
  constructor() {
    super("victory");
  }

  preload() {
    console.log("Victory Scene Loaded");
  }

  create(data) {
    // Victory Text
    this.victoryText = this.add.text(500, 170, "GOOD JOB!", {
      fontFamily: "Arial",
      fontSize: "40px",
      color: "#b42b2b",
    });

    // play Button
    this.playButton = this.add
      .text(600, 500, "PLAY", {
        fontFamily: "Arial",
        fontSize: "30px",
        color: "#b42b2b",
      })
      .setInteractive({ useHandCursor: true });

    // Assign load Level function to Play Button
    this.playButton.on("pointerdown", () => this.loadRandomLevel());
  }

  // Function to load a random level
  loadRandomLevel() {
    const scenes = ["level-one", "level-two", "level-three", "level-four", "level-five"];

    // Generating random level index
    const randomNumber = Phaser.Math.Between(0, scenes.length - 1);
    const randomScene = scenes[randomNumber];

    // Starting random level
    this.scene.start(randomScene);
  }
}

export default Victory;
