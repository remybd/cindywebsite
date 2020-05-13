import { TestBed } from '@angular/core/testing';

import { NextPreviousPageService } from './next-previous-page.service';
import {EntryButtonModel} from '../../home/models/entry-button.model';
import {HomeDataMock} from '../../datas/home-data.mock';
import {HomeComponent} from '../../home/home.component';

const entryButtonArrayForTest = [
  new EntryButtonModel('A', '', null, '', 'a'),
  new EntryButtonModel('B', '', null, '', 'b'),
  new EntryButtonModel('C', '', null, '', 'c'),
  new EntryButtonModel('D', '', null, '', 'd'),
];

describe('ContentTypeManagerService', () => {
  var service: NextPreviousPageService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    HomeDataMock.entryButtonArray = entryButtonArrayForTest;
    service = TestBed.get(NextPreviousPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('A should have b as next and null as previous', () => {
    service.currentPageKey = 'a';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toEqual('b')
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toBeUndefined();
    }));
  });

  it('B should have c as next and a as previous', () => {
    service.currentPageKey = 'b';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toEqual('c')
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toEqual('a');
    }));
  });

  it('C should have d as next and b as previous', () => {
    service.currentPageKey = 'c';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toEqual('d')
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toEqual('b');
    }));
  });

  it('D should have undefined as next and c as previous', () => {
    service.currentPageKey = 'd';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toBeUndefined()
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toEqual('c');
    }));
  });

});
