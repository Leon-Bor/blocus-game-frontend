import { IToken } from "../presets/tokens";
import { Square } from "./square";

interface IProps {
  scene: Phaser.Scene;
  x?: number;
  y?: number;
  token: IToken;
}

const SQUARE_SIZE = 100;
const SQUARE_PADDING = 5;
const SQUARE_MARGIN = 0;

export class Token extends Phaser.GameObjects.Container {
  constructor({ scene, x = 0, y = 0, token }: IProps) {
    super(scene, x, y);

    this.setSize(token.size * SQUARE_SIZE, token.size * SQUARE_SIZE);

    for (let i = 0; i < token.size; i++) {
      for (let j = 0; j < token.size; j++) {
        if (token.template[i][j] === 1) {
          const square = new Square({
            scene,
            x: i * SQUARE_SIZE + SQUARE_MARGIN * i,
            y: j * SQUARE_SIZE + SQUARE_MARGIN * j,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            padding: SQUARE_PADDING,
          });
          this.add(square);
        }
      }
    }
    // tbc:
    //this.

    this.scene.add.existing(this);
  }
}
