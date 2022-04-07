import { BootScene } from "./scenes/boot.scene";
import { PlayScene } from "./scenes/play.scene";

export enum SceneEnum {
  END = "End",
  PLAY = "Play",
  BOOT = "Boot",
}

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "Slot Game",
  url: "https://github.com/digitsensitive/phaser3-typescript",
  version: "1.0",
  width: 1000,
  height: 1000,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene, PlayScene],
  input: {
    keyboard: true,
    mouse: true,
    touch: true,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    // ...
  },
  physics: {
    default: "arcade",
    // arcade: {
    //   gravity: { y: 300 }
    // }
  },
  render: { antialias: false },
  plugins: {
    scene: [],
  },
};
