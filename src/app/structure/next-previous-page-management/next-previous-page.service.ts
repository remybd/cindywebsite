import {HostListener, Injectable} from '@angular/core';
import {HomeDataMock} from '../../datas/home-data.mock';
import {EntryButtonModel} from '../../home/models/entry-button.model';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NextPreviousPageService {
  static eventBinding = {
    ArrowRight: NextPreviousPageService.nextPageStatic,
    ArrowLeft: NextPreviousPageService.previousPageStatic
  };

  private _currentPageKey = '';

  private _nextPageKeySubject = new BehaviorSubject<string | null>(null);
  nextPage$ = this._nextPageKeySubject.asObservable();

  private _previousPageKeySubject = new BehaviorSubject<string | null>(null);
  previousPage$ = this._previousPageKeySubject.asObservable();

  set currentPageKey(value: string) {
    this._currentPageKey = value;
    this.setNextInHomePage();
    this.setPreviousInHomePage();
  }

  constructor(private router: Router) {
  }

  nextPage() {
    if(this._nextPageKeySubject.getValue()) {
      this.router.navigateByUrl('/content/' + this._nextPageKeySubject.getValue());
    }
  }

  previousPage() {
    if(this._previousPageKeySubject.getValue()) {
      this.router.navigateByUrl('/content/' + this._previousPageKeySubject.getValue());
    }
  }


  private setNextInHomePage() {
    const pagePosition = this.findPositionPageInHomePageList(this._currentPageKey);
    this._nextPageKeySubject.next(this.findNextPage(pagePosition)?.key)
  }

  private setPreviousInHomePage() {
    const pagePosition = this.findPositionPageInHomePageList(this._currentPageKey);
    this._previousPageKeySubject.next(this.findPreviousPage(pagePosition)?.key);
  }


  private findPositionPageInHomePageList(currentPageKey: string): number {
    return HomeDataMock.entryButtonArray.findIndex((entryButton: EntryButtonModel, index, obj) => {
      return entryButton.key == currentPageKey;
    });
  }

  private findNextPage(pagePosition: number = 0): EntryButtonModel {
    return HomeDataMock.entryButtonArray[pagePosition + 1];
  }

  private findPreviousPage(pagePosition: number = HomeDataMock.entryButtonArray.length - 1): EntryButtonModel {
    return HomeDataMock.entryButtonArray[pagePosition - 1];
  }

  static previousPageStatic(instance) {
    instance.previousPage();
  }

  static nextPageStatic(instance) {
    instance.nextPage();
  }


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    NextPreviousPageService.eventBinding[event.key](this)
  }

}
