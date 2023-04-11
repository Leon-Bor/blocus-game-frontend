import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToken, tokens } from '../presets/tokens';

export interface IPosition {
  x: number;
  y: number;
}

export interface IState {
  activePlayer: {
    tokenPosition: IPosition;
    tokenId: string;
    tokenRotation: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _state = new BehaviorSubject<IState>({
    activePlayer: {
      tokenPosition: { x: 3, y: 4 },
      tokenId: 'token-5-1',
      tokenRotation: 0,
    },
  });

  constructor() {}

  updateState(updateFunction: (s: IState) => IState): void {
    this._state.next(updateFunction(this._state.value));
  }

  get state(): IState {
    return this._state.value;
  }
}
