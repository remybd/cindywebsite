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

  it('On A cannot get data for previous page', () => {
    const previousPage = service.previousInHomePage('a');
    expect(previousPage).toBeUndefined();
  });

  it('On A can get data for next page', () => {
    const nextPage = service.nextInHomePage('a');
    expect(nextPage.key).toEqual('b');
  });

  it('On B can get data for previous page', () => {
    const previousPage = service.previousInHomePage('b');
    expect(previousPage.key).toEqual('a');
  });

  it('On B can get data for next page', () => {
    const nextPage = service.nextInHomePage('b');
    expect(nextPage.key).toEqual('c');
  });

  it('On B can get data for previous page', () => {
    const previousPage = service.previousInHomePage('d');
    expect(previousPage.key).toEqual('c');
  });

  it('On D cannot get data for next page', () => {
    const nextPage = service.nextInHomePage('d');
    expect(nextPage).toBeUndefined();
  });

});
