interface IProps {
  scene: Phaser.Scene;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  padding?: number;
}
export class Square extends Phaser.GameObjects.Container {
  overlaySprite!: Phaser.GameObjects.Sprite;
  backgroundRect!: Phaser.GameObjects.Rectangle;

  width: number;
  height: number;
  padding: number;

  constructor({
    scene,
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    padding = 0,
  }: IProps) {
    super(scene, x, y);

    this.width = width;
    this.height = height;
    this.padding = padding;

    this.setBackgroundRect();
    this.setOverlaySprite();

    this.scene.add.existing(this);
  }

  setBackgroundRect() {
    const rect = new Phaser.GameObjects.Rectangle(
      this.scene,
      0 + this.padding,
      0 + this.padding,
      this.width - this.padding * 2,
      this.height - this.padding * 2
    );

    rect.setFillStyle(0xffffff);

    this.add(rect);
  }

  setOverlaySprite() {
    const sprite = new Phaser.GameObjects.Sprite(
      this.scene,
      0 + this.padding,
      0 + this.padding,
      "background"
    );

    // image
    sprite.setScale(1);
    sprite.setAlpha(0.5);

    sprite.setDisplaySize(
      this.width - this.padding * 2,
      this.height - this.padding * 2
    );

    this.add(sprite);
  }
}
