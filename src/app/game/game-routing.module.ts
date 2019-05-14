import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameMainPageComponent} from "./game-interface/game-main-page/game-main-page.component";
import {GameOverScreenComponent} from "./game-interface/game-over-screen/game-over-screen.component";
import {StartScreenComponent} from "./game-interface/start-screen/start-screen.component";
import {InterLevelScreenComponent} from "./game-interface/inter-level-screen/inter-level-screen.component";

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game-over', component: GameOverScreenComponent },
  { path: 'play', component: GameMainPageComponent },
  {
    path: 'level', children: [
      {path: ':level', component: InterLevelScreenComponent,},
      {path: '', redirectTo: '1',  pathMatch: 'full'}
    ],
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRoutingModule {}
