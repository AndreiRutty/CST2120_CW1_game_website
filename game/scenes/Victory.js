class Victory extends Phaser.Scene {
    constructor() {
      super("victory");
    }
  
    preload() {
      console.log("Victory Scene Loaded");
    }
  
    create(data) {
      // Victory Text
      this.victoryText = this.add
        .text(450, 170, "CONGRATULATIONS! You are safe", {
          fontFamily: "Arial",
          fontSize: "40px",
          color: "#b42b2b",
        })
  
      // play Button
      this.playButton = this.add
        .text(600, 500, "PLAY", {
          fontFamily: "Arial",
          fontSize: "20px",
          color: "#b42b2b",
        })
        .setInteractive({ useHandCursor: true });
  
      // Assign load Level function to Play Button
      this.playButton.on("pointerdown", () => this.scene.start("level-three"));
    }

    loadLevel(){
      const randomNumber = Phaser.Math.Between(1,3);

      if(randomNumber == 1){

      }
    }
  }
  
  export default Victory;
  