import { Component, HostListener } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html',
  styleUrls: ['./gamepad.component.scss'],
})
export class GamepadComponent {
  constructor(public stateService: StateService) {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.onDirection(event.key.toLowerCase().replace('arrow', ''));
    if (event.key === 'a') {
      this.onTurn('left');
    }
    if (event.key === 'd') {
      this.onTurn('right');
    }
  }

  onDirection(direction: string): void {
    console.log('direction', direction);
    switch (direction) {
      case 'up':
        this.stateService.updateState((s) => {
          s.activePlayer.tokenPosition.y--;
          return s;
        });
        break;
      case 'down':
        this.stateService.updateState((s) => {
          s.activePlayer.tokenPosition.y++;
          return s;
        });
        break;
      case 'left':
        this.stateService.updateState((s) => {
          s.activePlayer.tokenPosition.x--;
          return s;
        });
        break;
      case 'right':
        this.stateService.updateState((s) => {
          s.activePlayer.tokenPosition.x++;
          return s;
        });
        break;
    }
  }

  onTurn(direction: string): void {
    console.log('onTurn', direction);

    switch (direction) {
      case 'left':
        this.stateService.updateState((s) => {
          s.activePlayer.tokenRotation--;
          return s;
        });
        break;
      case 'right':
        this.stateService.updateState((s) => {
          s.activePlayer.tokenRotation++;
          return s;
        });
        break;
    }
  }
}
