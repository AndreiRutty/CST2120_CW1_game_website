class Item extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    // Displaying the item on the scene
    this.scene.add.existing(this);

    // Adding physics to the item
    this.scene.physics.world.enable(this);

    // Setting the default scale
    this.setScale(0.4);

    // Lighting
    this.setPipeline("Light2D");

    // Scaling animation
    this.scene.tweens.add({
      targets: this,
      scaleX: 0.5,
      scaleY: 0.5,
      duration: 1000,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });
  }
}

export default Item;
