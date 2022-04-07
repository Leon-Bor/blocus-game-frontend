import Phaser, { Scenes } from "phaser";
import { GameBoard } from "../container/game-board";
import { SceneEnum } from "../config";
import { Token } from "../container/token";
import { tokens } from "../presets/tokens";

export class PlayScene extends Phaser.Scene {
  private background?: Phaser.GameObjects.Sprite;
  private gameBoard?: GameBoard;

  public constructor() {
    super({
      key: SceneEnum.PLAY,
    });
  }

  preload() {
    this.background = this.add.sprite(0, 0, "background");
    this.background.displayWidth = 1920;
    this.background.displayHeight = 1080;
    this.background.setOrigin(0, 0);
  }

  create() {
    console.log("scene");
    this.add.container(
      0,
      0,
      new GameBoard({
        scene: this,
      })
    );
  }
}
