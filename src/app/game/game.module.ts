import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMainPageComponent } from './game-main-page/game-main-page.component';
import { FallingItemComponent } from './items/falling-item/falling-item.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [GameMainPageComponent, FallingItemComponent, PlayerComponent],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
