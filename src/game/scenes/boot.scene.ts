import Phaser from "phaser";
import { SceneEnum } from "../config";
let assets = require("../../assets/assets.json");

export class BootScene extends Phaser.Scene {
  private loadingBar?: Phaser.GameObjects.Graphics;
  private progressBar?: Phaser.GameObjects.Graphics;

  constructor() {
    super({
      key: SceneEnum.BOOT,
    });
  }

  preload(): void {
    // set the background and create loading bar
    this.cameras.main.setBackgroundColor(0xff0000);
    this.createLoadingbar();

    // pass value to change the loading bar fill
    this.load.on(
      "progress",
      (value: number) => {
        this.progressBar?.clear();
        this.progressBar?.fillStyle(0xfff6d3, 1);
        this.progressBar?.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        );
      },
      this
    );

    // delete bar graphics, when loading complete
    this.load.on(
      "complete",
      () => {
        this.progressBar?.destroy();
        this.loadingBar?.destroy();
      },
      this
    );

    // load out package
    this.load.pack("slot", assets);
    console.log("preload 2");
  }

  update(): void {
    this.scene.start(SceneEnum.PLAY);
  }

  private createLoadingbar(): void {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0x5dae47, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics();
  }
}
