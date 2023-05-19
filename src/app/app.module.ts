import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GamepadComponent } from './components/gamepad/gamepad.component';
import { IndexComponent } from './views/index.component';
import { TokenComponent } from './components/token/token.component';
import { StateService } from './services/state.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GamepadComponent,
    IndexComponent,
    TokenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [StateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
