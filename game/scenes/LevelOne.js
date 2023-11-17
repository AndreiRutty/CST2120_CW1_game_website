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

    // Tilemap
    this.load.tilemapTiledJSON(
      "level-one-tilemap",
      "../game/game-assets/tilemap/level1.json"
    );

    // Player
    this.load.spritesheet("player", "../game/game-assets/player.png", {
      frameWidth: 32,
      frameHeight: 66,
    });
  }

  create(data) {
    this.cameras.main.setZoom(2);

    // Map
    const map = this.make.tilemap({
      key: "level-one-tilemap",
      tileWidth: 16,
      tileHeight: 16,
    });

    // Tile Sets
    const tileSetOne = map.addTilesetImage("A4", "tiles-one");
    const tileSetTwo = map.addTilesetImage("A5", "tiles-two");
    const tileSetThree = map.addTilesetImage("Inside_C", "tiles-three");
    const tileSetFour = map.addTilesetImage("Inside_D", "tiles-four");
    const tileSetFive = map.addTilesetImage("Inside_E", "tiles-five");

    // Layer - from lower to upper
    const groundLayer = map.createLayer("Ground", tileSetTwo, 170, 0);
    const wallLayer = map.createLayer("Wall", tileSetOne, 170, 0);
    const boundaryLayer = map.createLayer("Boundary", tileSetOne, 170, 0);

    // Player

    this.anims.create({
      key: "walk-down",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 2 }),
      frameRate: 4,
      repeat: -1,
    });

    this.player = this.add.sprite(640, 360, "player");
    this.player.anims.play("walk-down", true);
  }
}
