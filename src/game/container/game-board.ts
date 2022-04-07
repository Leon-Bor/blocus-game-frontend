import Phaser from "phaser";
import { tokens } from "../presets/tokens";
import { Token } from "./token";

interface IProps {
  scene: Phaser.Scene;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export class GameBoard extends Phaser.GameObjects.Container {
  constructor({ scene, x = 100, y = 100, width = 800, height = 800 }: IProps) {
    super(scene, x, y);
    this.scene = scene;
    // this.setSize(width, height);
    // this.setPosition(x, y);

    this.add(
      new Token({
        scene: this.scene,
        token: tokens[4],
      })
    );

    this.scene.add.existing(this);
  }
}
