import {HostListener, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable, timer} from "rxjs";
import {FallingItem} from "../items/falling-item/falling-item.model";

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {
  _nbFallingItemsSubject$ = new BehaviorSubject<number>(environment.game.nbFallingItems);
  nbFallingItems$ = this._nbFallingItemsSubject$.asObservable();

  _fallingItemArraySubject$ = new BehaviorSubject<FallingItem[]>([]);
  fallingItemArray$ = this._fallingItemArraySubject$.asObservable();

  timer = timer(environment.game.initialTimerDelay, environment.game.period);
  timer$

  maxHeight: number = window.innerHeight;
  currentHeight: number = 0;

  constructor() {
    this.updateFallingItemArray();
    this.startGame();
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

      console.log(this.currentHeight, this.maxHeight)
      if(this.currentHeight >= this.maxHeight) {
        this.stopGame();
      }

      this.updateFallingItems();
    });
  }





  // Global Game management

  startGame() {
    this.subscribeTimer();
  }

  stopGame() {
    this.timer$.unsubscribe();
    console.log("game over")
  }

}
