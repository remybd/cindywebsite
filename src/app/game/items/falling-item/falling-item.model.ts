import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

export class FallingItem {
  _left$ = new BehaviorSubject<number>(0);
  left$ = this._left$.asObservable();

  _top$ = new BehaviorSubject<number>(0);
  top$ = this._top$.asObservable();

  constructor(top: number = 0, left: number = 0) {
    this.setTop(top);
    this.setLeft(left);
  }

  setLeft(left) {
    this._left$.next(left);
  }

  setTop(top) {
    this._top$.next(top);
  }
}
