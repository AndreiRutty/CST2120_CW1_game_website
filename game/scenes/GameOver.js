class GameOver extends Phaser.Scene {
  constructor() {
    super("game-over");
  }

  preload() {
    console.log("Game Over Scene Loaded");
  }

  create(data) {
    // Game Over Text
    this.gameOverText = this.add
      .text(550, 170, "GAME OVER", {
        fontFamily: "Arial",
        fontSize: "40px",
        color: "#b42b2b",
      })

    // try Again Button
    this.tryAgainButton = this.add
      .text(600, 500, "TRY AGAIN", {
        fontFamily: "Arial",
        fontSize: "20px",
        color: "#b42b2b",
      })
      .setInteractive({ useHandCursor: true });

    // Assign load Level function to Play Button
    this.tryAgainButton.on("pointerdown", () => this.scene.start("level-one"));
  }
}

export default GameOver;
