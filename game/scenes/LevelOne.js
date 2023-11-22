import Item from "../../game/scripts/item.js";
import Player from "../../game/scripts/player.js";

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

    // Items to pick up
    this.load.image("back-pack", "../game/game-assets/items/Backpack.png");
    this.load.image("bandage", "../game/game-assets/items/Bandage.png");
    this.load.image("canned-food", "../game/game-assets/items/CannedFood.png");
    this.load.image("fresh-food", "../game/game-assets/items/FreshFood.png");
    this.load.image("med-kit", "../game/game-assets/items/MedicKit.png");
  }

  create(data) {
    this.score = 0;

    // Camera Setting
    this.cameras.main.setZoom(2);
    this.cameras.main.setBounds(0, 0, 920, 670);

    this.scoreText = this.add.text(350, 200, `Score: ${this.score}`, {
      fontFamily: "Arial",
      fontSize: "10px",
      color: "#ffffff",
    });

    this.scoreText.setScrollFactor(0).setDepth(10);

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
    this.groundLayer = this.map
      .createLayer("Ground", this.tileSetTwo, 0, 0)
      .setPipeline("Light2D");
    this.groundDecoLayer = this.map
      .createLayer("Ground-deco", this.tileSetFive, 0, 0)
      .setPipeline("Light2D");
    this.wallLayer = this.map
      .createLayer("Wall", this.tileSetOne, 0, 0)
      .setPipeline("Light2D");
    this.boundaryLayer = this.map
      .createLayer("Boundary", this.tileSetOne, 0, 0)
      .setPipeline("Light2D");
    this.wallDecoLayer = this.map
      .createLayer("Wall-deco", this.tileSetThree, 0, 0)
      .setPipeline("Light2D");
    this.secondWallDecoLayer = this.map
      .createLayer("Wall-deco-2", this.tileSetSix, 0, 0)
      .setPipeline("Light2D");
    this.insideDecoWithColLayer = this.map
      .createLayer("Inside-deco-c", this.tileSetThree, 0, 0)
      .setPipeline("Light2D");
    this.insideDecoLayer = this.map
      .createLayer("Inside-deco", this.tileSetThree, 0, 0)
      .setPipeline("Light2D");
    this.insideDecoLayerTwo = this.map
      .createLayer("Inside-deco-2", this.tileSetThree, 0, 0)
      .setPipeline("Light2D");
    this.doorLayer = this.map
      .createLayer("Door", this.tileSetFive, 0, 0)
      .setPipeline("Light2D");

    // Player
    this.player = new Player(this, 60, 400, "player");

    // Setting the camera to follow our player
    this.cameras.main.startFollow(this.player);

    // Lighting
    //Adding light source
    this.playerLight = this.lights.addLight(this.player.x, this.player.y, 75);

    this.lights.enable().setAmbientColor(0x000000);

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

    for (var i = 0; i < 20; i++) {
      this.spawnItems();
    }

    // Set up individual keys for W, A, S, D
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }

  update(time, delta) {
    // Player Movement
    this.player.move(this.keyW, this.keyA, this.keyS, this.keyD);

    // Making the light follow the player
    this.playerLight.x = this.player.x;
    this.playerLight.y = this.player.y;
  }

  spawnItems() {
    // Items key array
    const items = [
      "back-pack",
      "bandage",
      "canned-food",
      "fresh-food",
      "med-kit",
    ];

    // Spawn Points Limits By
    const sectorOne = { x: [80, 496], y: [180, 428] };
    const sectorTwo = { x: [565, 848], y: [338, 606] };

    // Sector Array
    const sectors = [sectorOne, sectorTwo];
    const randomSectorIndex = Phaser.Math.Between(0, 1);

    // Calculating the random x position
    const xPos = sectors[randomSectorIndex].x;
    const randomX = Phaser.Math.Between(xPos[0], xPos[1]);

    const yPos = sectors[randomSectorIndex].y;
    const randomY = Phaser.Math.Between(yPos[0], yPos[1]);

    const randomItemIndex = Phaser.Math.Between(0, items.length - 1);

    var item = new Item(this, randomX, randomY, items[randomItemIndex]);

    this.physics.add.collider(this.player, item, () => {
      item.destroy();
      this.score += 1;
      this.scoreText.setText(`Score: ${this.score}`);
      console.log(this.score);
    });
  }
}

export default LevelOne;
