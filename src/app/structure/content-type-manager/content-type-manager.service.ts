import {Injectable} from '@angular/core';
import {ContentType} from '../../datas/content-type.enum';
import {HomeDataMock} from '../../datas/home-data.mock';
import {EntryButtonModel} from '../../home/models/entry-button.model';

@Injectable({
  providedIn: 'root'
})
export class ContentTypeManagerService {
  private _currentContentType: ContentType = ContentType.empty;

  constructor() {
  }

  // TODO use it in components
  set currentContentType(value: ContentType) {
    this._currentContentType = value;
  }

  nextInHomePage(currentPageKey: string): EntryButtonModel {
    const pagePosition = this.findPositionPageInHomePageList(currentPageKey);
    return this.findNextPageSameType(pagePosition);
  }

  previousInHomePage(currentPageKey: string): EntryButtonModel {
    const pagePosition = this.findPositionPageInHomePageList(currentPageKey);
    return this.findPreviousPageSameType(pagePosition);
  }


  findPositionPageInHomePageList(currentPageKey: string): number {
    return HomeDataMock.entryButtonArray.findIndex((entryButton: EntryButtonModel, index, obj) => {
      return entryButton.key == currentPageKey;
    });
  }

  findNextPageSameType(startIndex: number = 0): EntryButtonModel {
    return HomeDataMock.entryButtonArray.find((entryButton: EntryButtonModel, index, obj) => {
      if (index <= startIndex) { //if searching on index before, return false
        return false;
      } else {
        return this.isSameContentType(index);
      }
    });
  }

  findPreviousPageSameType(stopIndex: number = HomeDataMock.entryButtonArray.length - 1): EntryButtonModel {
    return HomeDataMock.entryButtonArray.find((entryButton: EntryButtonModel, index, obj) => {
      if (index >= stopIndex) { //if searching on index after, return false
        return false;
      } else {
        return this.isSameContentType(index);
      }
    });
  }

  isSameContentType(index): boolean {
    if (this._currentContentType == ContentType.empty) {
      return true;
    } else {
      return this._currentContentType == HomeDataMock.entryButtonArray[index].type;
    }
  }


}
