import { Component } from '@angular/core';
import { ILevel, levels } from '../../presets/levels';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent {
  public level: ILevel;

  constructor() {
    this.level = levels.find((l) => l.id === 'level-1')!;
  }
}
