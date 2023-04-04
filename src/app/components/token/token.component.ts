import { Component } from '@angular/core';
import { IToken } from '../../presets/tokens';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent {
  public token: IToken = {
    size: 3,
    points: 5,
    id: 'token-3-7',
    anchor: { x: 1, y: 1 },
    template: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
    ],
  };

  public getGrid(): string {
    return this.token.template.reduce((p, c) => p + 'max-content ', '');
  }
}
