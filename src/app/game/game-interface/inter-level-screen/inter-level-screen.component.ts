import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameManagerService} from "../../services/game-manager.service";
import {timer} from "rxjs";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-inter-level-screen',
  templateUrl: './inter-level-screen.component.html',
  styleUrls: ['../css/global-game-style.css', './inter-level-screen.component.css']
})
export class InterLevelScreenComponent implements OnInit {
  level: number = 1;

  constructor(private route: ActivatedRoute,
              private gameManager: GameManagerService,
              private router: Router) { }

  ngOnInit() {
    this.getLevelFromUrl();
  }

  waitingBeforeLevel() {
    let t = timer(environment.game.delayBetweenLevel, 1000);
    let timer$ = t.subscribe(tick => {
      timer$.unsubscribe();
      this.router.navigateByUrl('/game/play');
    });
  }

  getLevelFromUrl() {
    this.route.params.subscribe(
      params => {
        this.level= +params['level'];
        if (this.level && this.level > 0) {
          this.gameManager.setLevel(this.level);
          this.waitingBeforeLevel();
        }
      });
  }

}
