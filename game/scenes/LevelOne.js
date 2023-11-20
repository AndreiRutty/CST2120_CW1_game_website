class LevelOne extends Phaser.Scene {
  constructor() {
    super("level-one");
  }

  preload() {
    console.log("Level One Scene Loaded");

    // Tiles
    this.load.image("tiles-one", "../game/game-assets/tiles/A4.png");
    this.load.image("tiles-two", "../game/game-assets/tiles/A5.png");
    this.load.image("tiles-three", "../game/game-assets/tiles/Inside_C.png");
    this.load.image("tiles-four", "../game/game-assets/tiles/Inside_D.png");
    this.load.image("tiles-five", "../game/game-assets/tiles/Inside_E.png");
    this.load.image("tiles-six", "../game/game-assets/tiles/Bonus_2.png");

    // Tilemap
    this.load.tilemapTiledJSON(
      "level-one-tilemap",
      "../game/game-assets/tilemap/level1.json"
    );

    // Player
    this.load.spritesheet("player", "../game/game-assets/player.png", {
      frameWidth: 32,
      frameHeight: 66.5,
    });
  }

  create(data) {
    // Camera Setting
    this.cameras.main.setZoom(2);
    this.cameras.main.setBounds(0, 0, 920, 670);

    // Map
    this.map = this.make.tilemap({
      key: "level-one-tilemap",
      tileWidth: 16,
      tileHeight: 16,
    });

    // Tile Sets
    this.tileSetOne = this.map.addTilesetImage("A4", "tiles-one");
    this.tileSetTwo = this.map.addTilesetImage("A5", "tiles-two");
    this.tileSetThree = this.map.addTilesetImage("Inside_C", "tiles-three");
    this.tileSetFour = this.map.addTilesetImage("Inside_D", "tiles-four");
    this.tileSetFive = this.map.addTilesetImage("Inside_E", "tiles-five");
    this.tileSetSix = this.map.addTilesetImage("Bonus_2", "tiles-six");

    // Layers - from lower to upper
    this.groundLayer = this.map.createLayer("Ground", this.tileSetTwo, 0, 0);
    this.groundDecoLayer = this.map.createLayer("Ground-deco", this.tileSetFive, 0, 0);
    this.wallLayer = this.map.createLayer("Wall", this.tileSetOne, 0, 0);
    this.boundaryLayer = this.map.createLayer("Boundary", this.tileSetOne, 0, 0);
    this.wallDecoLayer = this.map.createLayer("Wall-deco", this.tileSetThree, 0, 0);
    this.secondWallDecoLayer = this.map.createLayer("Wall-deco-2", this.tileSetSix, 0, 0);
    this.insideDecoWithColLayer = this.map.createLayer("Inside-deco-c", this.tileSetThree, 0, 0);
    this.insideDecoLayer = this.map.createLayer("Inside-deco", this.tileSetThree, 0, 0);
    this.insideDecoLayerTwo = this.map.createLayer("Inside-deco-2", this.tileSetThree, 0, 0);
    this.doorLayer = this.map.createLayer("Door", this.tileSetFive, 0, 0);

    // Player
    this.player = this.physics.add.sprite(60, 400, "player");
    this.player.setFrame(1);

    // Setting the camera to follow our player
    this.cameras.main.startFollow(this.player);

    // Setting collision for all tiles in the layers except -1 if any
    this.boundaryLayer.setCollisionByExclusion([-1]);
    this.doorLayer.setCollisionByExclusion([-1]);
    this.insideDecoWithColLayer.setCollisionByExclusion([-1]);

    // Adding collision between player and the different layers
    this.physics.add.collider(this.player, this.boundaryLayer);

    this.physics.add.collider(this.player, this.doorLayer, () => {
      // Print a message when colliding against the door
      console.log("Collide with doors");
    });

    this.physics.add.collider(this.player, this.insideDecoWithColLayer);

    // Set up individual keys for W, A, S, D
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    // Walking Animations
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", { start: 9, end: 11 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 2 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 3, end: 5 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 6, end: 8 }),
      frameRate: 5,
      repeat: -1,
    });
  }

  update(time, delta) {
    // Initialy the player is at rest
    this.player.setVelocity(0);
    const speed = 150;

    // Cheecking for keyboard input and move the player accordingly

    // Horizontal Movement
    if (this.keyA.isDown) {
      // Moving to the left
      this.player.setVelocityX(-speed);
      this.player.anims.play("left", true);
    } else if (this.keyD.isDown) {
      // Moving to the right
      this.player.setVelocityX(speed);
      this.player.anims.play("right", true);
    }

    // Vertical Movement
    if (this.keyW.isDown) {
      // Moving upward
      this.player.setVelocityY(-speed);
      this.player.anims.play("up", true);
    } else if (this.keyS.isDown) {
      // Moving downward
      this.player.setVelocityY(speed);
      this.player.anims.play("down", true);
    }

    // Stopping walking animations when not pressing any key
    if (
      !this.keyA.isDown &&
      !this.keyD.isDown &&
      !this.keyS.isDown &&
      !this.keyW.isDown
    ) {
      this.player.anims.stop();
      this.player.setFrame(1);

      // Debugging
      // console.log(this.player.x);
      // console.log(this.player.y);
    }
  } 
}
