class Item extends Phaser.GameObjects.Sprite {
  constructor(scene, player, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    // Displaying the item on the scene
    this.scene.add.existing(this);

    // Adding physics to the item
    this.scene.physics.world.enable(this);

    // Setting the default scale
    this.setScale(0.4);
  }
}

export default Item;
