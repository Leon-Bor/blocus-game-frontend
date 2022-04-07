import Phaser from "phaser";
export class Background extends Phaser.GameObjects.Sprite {
  public constructor(key = "background", scene: Phaser.Scene) {
    super(scene, 0, 0, key);
    this.displayWidth = 1920;
    this.displayHeight = 1080;
    this.setOrigin(0, 0);
  }
}
