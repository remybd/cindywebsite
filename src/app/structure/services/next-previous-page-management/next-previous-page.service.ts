import {inject, Injectable} from '@angular/core';
import {EntryButtonModel} from '../../../home/models/entry-button.model';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {HomeDataMock} from "../../../data/home-data.mock";
import {Key} from "../../model/key";

@Injectable({
  providedIn: 'root'
})
export class NextPreviousPageService {
  static eventBinding = {
    ArrowRight: NextPreviousPageService?.nextPageStatic,
    ArrowLeft: NextPreviousPageService?.previousPageStatic
  };

  private _currentPageKey = '';
  private _nextPageKeySubject = new BehaviorSubject<string | null>(null);
  nextPage$ = this._nextPageKeySubject.asObservable();
  private _previousPageKeySubject = new BehaviorSubject<string | null>(null);
  previousPage$ = this._previousPageKeySubject.asObservable();
  keyList: Key[] = HomeDataMock.entryButtonArray;
  routePrefix = HomeDataMock.contentPagePath;

  router = inject(Router);

  static previousPageStatic(instance) {
    instance.previousPage();
  }

  static nextPageStatic(instance) {
    instance.nextPage();
  }

  set currentPageKey(value: string) {
    if (!value) {
      this.reset();
      return;
    }
    this._currentPageKey = value;
    this.setNextInHomePage();
    this.setPreviousInHomePage();
  }

  private reset() {
    this._currentPageKey = null;
    this._nextPageKeySubject.next(null);
    this._previousPageKeySubject.next(null);
  }

  nextPage() {
    if (this._nextPageKeySubject.getValue()) {
      this.router.navigateByUrl(this.routePrefix + this._nextPageKeySubject.getValue());
    }
  }

  previousPage() {
    if (this._previousPageKeySubject.getValue()) {
      this.router.navigateByUrl(this.routePrefix + this._previousPageKeySubject.getValue());
    }
  }


  private setNextInHomePage() {
    const pagePosition = this.findPositionPageInHomePageList(this._currentPageKey);
    this._nextPageKeySubject.next(this.findNextPage(pagePosition));
  }

  private setPreviousInHomePage() {
    const pagePosition = this.findPositionPageInHomePageList(this._currentPageKey);
    this._previousPageKeySubject.next(this.findPreviousPage(pagePosition));
  }


  private findPositionPageInHomePageList(currentPageKey: string): number {
    return this.keyList.findIndex((entryButton: Key, index, obj) => {
      return entryButton.key === currentPageKey;
    });
  }

  private findNextPage(pagePosition: number = 0): string {
    return this.keyList[pagePosition + 1]?.key;
  }

  private findPreviousPage(pagePosition: number = this.keyList.length - 1): string {
    return this.keyList[pagePosition - 1]?.key;
  }

  public keyEvent(event: KeyboardEvent) {
    const eventFunction = NextPreviousPageService.eventBinding[event.key];
    if (!eventFunction) {
      return;
    }
    eventFunction(this);
  }

}
