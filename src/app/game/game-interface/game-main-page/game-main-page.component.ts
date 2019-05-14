import { Component, OnInit } from '@angular/core';
import {GameManagerService} from "../../services/game-manager.service";
import {Observable} from "rxjs";
import {FallingItem} from "../../items/falling-item/falling-item.model";

@Component({
  selector: 'app-game-main-page',
  templateUrl: './game-main-page.component.html',
  styleUrls: ['./game-main-page.component.css']
})
export class GameMainPageComponent implements OnInit {
  fallingItemArray$: Observable<FallingItem[]>;

  constructor(private gameManager: GameManagerService) {
    this.gameManager.startLevel();
    //link the observable of the component to the one in the service to have live updates
    this.fallingItemArray$ = this.gameManager.fallingItemArray$;
  }

  ngOnInit() {

  }


}
