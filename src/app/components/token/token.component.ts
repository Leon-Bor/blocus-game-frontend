import { Component } from '@angular/core';
import { IToken, tokens } from '../../presets/tokens';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent {
  public token: IToken;

  constructor(public stateService: StateService) {
    const { tokenId } = this.stateService.state.activePlayer;
    this.token = tokens.find((t) => t.id === tokenId)!;
  }

  public getGrid(): string {
    return this.token.template[0].reduce((p, c) => p + 'max-content ', '');
  }

  public get styles(): any {
    const { tokenPosition, tokenRotation } =
      this.stateService.state.activePlayer;
    return {
      left: `calc(var(--token-width) * ${tokenPosition.x})`,
      top: `calc(var(--token-width) * ${tokenPosition.y})`,
      'grid-template-columns': this.getGrid(),
      transform: `rotate(${tokenRotation * 90}deg)`,
      'transform-origin': `calc(var(--token-width) * ${this.token.anchor.x}) calc(var(--token-width) * ${this.token.anchor.y})`,
    };
  }
}
