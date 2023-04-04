import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GamepadComponent } from './components/gamepad/gamepad.component';
import { IndexComponent } from './views/index.component';
import { TokenComponent } from './components/token/token.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GamepadComponent,
    IndexComponent,
    TokenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
