import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMainPageComponent } from './game-main-page/game-main-page.component';
import { FallingItemComponent } from './items/falling-item/falling-item.component';
import { PlayerComponent } from './player/player.component';
import {GameRoutingModule} from "./game-routing.module";

@NgModule({
  declarations: [
    GameMainPageComponent,
    FallingItemComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
  ]
})
export class GameModule { }
