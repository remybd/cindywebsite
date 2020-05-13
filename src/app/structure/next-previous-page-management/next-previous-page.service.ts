import {Injectable} from '@angular/core';
import {ContentType} from '../../datas/content-type.enum';
import {HomeDataMock} from '../../datas/home-data.mock';
import {EntryButtonModel} from '../../home/models/entry-button.model';

@Injectable({
  providedIn: 'root'
})
export class NextPreviousPageService {

  constructor() {
  }

  nextInHomePage(currentPageKey: string): EntryButtonModel {
    const pagePosition = this.findPositionPageInHomePageList(currentPageKey);
    return this.findNextPage(pagePosition);
  }

  previousInHomePage(currentPageKey: string): EntryButtonModel {
    const pagePosition = this.findPositionPageInHomePageList(currentPageKey);
    return this.findPreviousPage(pagePosition);
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

}
