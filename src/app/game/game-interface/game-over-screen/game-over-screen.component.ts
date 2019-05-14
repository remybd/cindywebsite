import { Component, OnInit } from '@angular/core';
import {GameManagerService} from "../../services/game-manager.service";

@Component({
  selector: 'app-game-over-screen',
  templateUrl: './game-over-screen.component.html',
  styleUrls: ['../css/global-game-style.css', './game-over-screen.component.css']
})
export class GameOverScreenComponent implements OnInit {
  level: number = 0;

  constructor(private gameManager: GameManagerService) { }

  ngOnInit() {
    this.level = this.gameManager.level
  }

}
