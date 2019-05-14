import {HostListener, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable, timer} from "rxjs";
import {FallingItem} from "../items/falling-item/falling-item.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {
  _nbFallingItemsSubject$ = new BehaviorSubject<number>(0);
  nbFallingItems$ = this._nbFallingItemsSubject$.asObservable();

  _fallingItemArraySubject$ = new BehaviorSubject<FallingItem[]>([]);
  fallingItemArray$ = this._fallingItemArraySubject$.asObservable();

  timer = timer(environment.game.initialTimerDelay, environment.game.period);
  timer$;

  level: number = 1;

  maxHeight: number = window.innerHeight;
  currentHeight: number = 0;


  constructor(private router: Router) {
    this.updateFallingItemArray();
    this.resetGame();
  }



  // Falling Items management

  updateFallingItemArray() {
    this.nbFallingItems$.subscribe(nbItems => {
      let array: FallingItem[] = [];

      for(let i= 0; i < nbItems; i++) {
        array.push(this.generateRandomFallingItems());
      }

      this._fallingItemArraySubject$.next(array)
    })
  }

  generateRandomFallingItems() {
    return new FallingItem(this.currentHeight, Math.random() * window.innerWidth);
  }

  updateFallingItems() {
    for(let item of this._fallingItemArraySubject$.getValue()) {
      item.setTop(this.currentHeight);
    }
  }





  // Timer management

  subscribeTimer() {
    this.timer$ = this.timer.subscribe(tick => {
      // Your API call, which will be performed every period
      this.currentHeight += environment.game.fallingItemHeight;

      //console.log(this.currentHeight, this.maxHeight)
      if(this.currentHeight >= this.maxHeight) {
        this.stopLevel();
      }

      this.updateFallingItems();
    });
  }





  // Global Game management

  resetGame() {
    this._nbFallingItemsSubject$.next(0);
    this._fallingItemArraySubject$.next([]);
    this.maxHeight = window.innerHeight;
    this.currentHeight = 0;
    this.timer = timer(environment.game.initialTimerDelay, environment.game.period);
  }

  stopLevel() {
    this.timer$.unsubscribe();
    const newLevel : number = this.level + 1;
    this.resetGame();

    if(newLevel > 3) {
      this.router.navigateByUrl('/game/game-over');
    } else {
      this.router.navigateByUrl('/game/level/' + newLevel);
    }
  }


  setLevel(level: number = 1) {
    if(level > 0)
      this.level = level;
  }

  startLevel() {
    this.resetGame();
    this._nbFallingItemsSubject$.next(environment.game.nbFallingItems * this.level);
    this.timer = timer(environment.game.initialTimerDelay,
      environment.game.period / this.level);
    this.subscribeTimer();
  }
}
