class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    // Displaying the item on the scene
    this.scene.add.existing(this);

    // Adding physics to the item
    this.scene.physics.world.enable(this);

    this.setFrame(1);

    this.setPipeline("Light2D");

    // Attributes
    this.speed = 150;

    // Player Animations
    scene.anims.create({
      key: "up",
      frames: scene.anims.generateFrameNumbers(key, { start: 9, end: 11 }),
      frameRate: 5,
      repeat: -1,
    });

    scene.anims.create({
      key: "down",
      frames: scene.anims.generateFrameNumbers(key, { start: 0, end: 2 }),
      frameRate: 5,
      repeat: -1,
    });

    scene.anims.create({
      key: "left",
      frames: scene.anims.generateFrameNumbers(key, { start: 3, end: 5 }),
      frameRate: 5,
      repeat: -1,
    });

    scene.anims.create({
      key: "right",
      frames: scene.anims.generateFrameNumbers(key, { start: 6, end: 8 }),
      frameRate: 5,
      repeat: -1,
    });
  }

  // Function to move the player
  move(W, A, S, D) {
    this.body.setVelocity(0);

    // Cheecking for keyboard input and move the player accordingly
    // Horizontal Movement
    if (A.isDown) {
      // Moving to the left
      this.body.setVelocityX(-this.speed);
      this.play("left", true);
    } else if (D.isDown) {
      // Moving to the right
      this.body.setVelocityX(this.speed);
      this.play("right", true);
    }

    // Vertical Movement
    if (W.isDown) {
      // Moving upward
      this.body.setVelocityY(-this.speed);
      this.play("up", true);
    } else if (S.isDown) {
      // Moving downward
      this.body.setVelocityY(this.speed);
      this.play("down", true);
    }

    // Stopping walking animations when not pressing any key
    if (!A.isDown && !D.isDown && !S.isDown && !W.isDown) {
      this.stop();
      this.setFrame(1);

    }
  }

  // Adding point to the player's object in local storage
  addScore(point) {
    // Find a player which is logged in
    // Iterating through local storage
    for (var i = 0; i < localStorage.length; i++) {
      // Getting the keys
      var userKey = localStorage.key(i);

      if (userKey != "debug" && userKey != "loglevel") {
        // Converting from JSON to objects
        var user = JSON.parse(localStorage.getItem(userKey));

        // Checking if a user is already log in
        if (user.isLogIn) {
          // Add point to the user score tally in localStorage
          user.score += point;
          localStorage.setItem(user.name, JSON.stringify(user));
        }
      }
    }
  }
}

export default Player;
