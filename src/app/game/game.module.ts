import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMainPageComponent } from './game-interface/game-main-page/game-main-page.component';
import { FallingItemComponent } from './items/falling-item/falling-item.component';
import { PlayerComponent } from './player/player.component';
import {GameRoutingModule} from "./game-routing.module";
import { StartScreenComponent } from './game-interface/start-screen/start-screen.component';
import { GameOverScreenComponent } from './game-interface/game-over-screen/game-over-screen.component';
import { InterLevelScreenComponent } from './game-interface/inter-level-screen/inter-level-screen.component';

@NgModule({
  declarations: [
    GameMainPageComponent,
    FallingItemComponent,
    PlayerComponent,
    StartScreenComponent,
    GameOverScreenComponent,
    InterLevelScreenComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
  ]
})
export class GameModule { }
