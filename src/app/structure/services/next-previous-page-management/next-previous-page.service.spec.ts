import {TestBed} from '@angular/core/testing';

import {NextPreviousPageService} from './next-previous-page.service';
import {EntryButtonModel} from '../../../home/models/entry-button.model';
import {HomeDataMock} from '../../../data/home-data.mock';
import {RouterTestingModule} from '@angular/router/testing';

const entryButtonArrayForTest = [
  new EntryButtonModel('A', '', null, '', 'a'),
  new EntryButtonModel('B', '', null, '', 'b'),
  new EntryButtonModel('C', '', null, '', 'c'),
  new EntryButtonModel('D', '', null, '', 'd'),
];

describe('ContentTypeManagerService', () => {
  let service: NextPreviousPageService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ]
  }));

  beforeEach(() => {
    HomeDataMock.entryButtonArray = entryButtonArrayForTest;
    service = TestBed.inject(NextPreviousPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('A should have b as next and null as previous', () => {
    service.currentPageKey = 'a';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toEqual('b');
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toBeUndefined();
    }));
  });

  it('B should have c as next and a as previous', () => {
    service.currentPageKey = 'b';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toEqual('c');
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toEqual('a');
    }));
  });

  it('C should have d as next and b as previous', () => {
    service.currentPageKey = 'c';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toEqual('d');
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toEqual('b');
    }));
  });

  it('D should have undefined as next and c as previous', () => {
    service.currentPageKey = 'd';
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toBeUndefined();
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toEqual('c');
    }));
  });

  it('null should have null as next and null as previous', () => {
    service.currentPageKey = null;
    expect(service.nextPage$.subscribe((key) => {
      expect(key).toBeNull();
    }));

    expect(service.previousPage$.subscribe((key) => {
      expect(key).toBeNull();
    }));
  });
});
