import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentDataMock} from '../data/content-data.mock';
import {ContentPageModel} from './models/content-page.model';
import {NextPreviousPageService} from '../structure/services/next-previous-page-management/next-previous-page.service';
import {environment} from '../../environments/environment';
import {Title} from '@angular/platform-browser';
import {PasswordStorageService} from "../structure/services/password-storage.service";
import {HomeDataMock} from "../data/home-data.mock";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    standalone: false
})
export class ContentComponent implements OnInit {
  content: ContentPageModel;

  constructor(private route: ActivatedRoute,
              private nextPreviousPageService: NextPreviousPageService,
              private titleService: Title,
              public passwordStorage: PasswordStorageService) {
  }

  ngOnInit() {
    HomeDataMock.setupNextPreviousService(this.nextPreviousPageService);
    this.getContentFromUrl();
  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      const key = params.get('key');
      if (key && key in ContentDataMock.contentDataDic) {
        this.content = ContentDataMock.contentDataDic[key];
        this.titleService.setTitle(environment.titleBase + this.content.title);

        this.nextPreviousPageService.currentPageKey = key;
      }
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.nextPreviousPageService.keyEvent(event);
  }

  swipeRight() {
    this.nextPreviousPageService.previousPage();
  }

  swipeLeft() {
    this.nextPreviousPageService.nextPage();
  }
}
